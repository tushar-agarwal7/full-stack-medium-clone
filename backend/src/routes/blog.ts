import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt';
import {createPostInput,updatePostInput} from 'tushar-medium'


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>();


//middleware
blogRouter.use('/*', async (c, next) => {
  const jwt = c.req.header("Authorization") || "";
try{
  const user=await verify (jwt,c.env.JWT_SECRET)
   console.log(user)
 if(user){
  c.set('userId',user.id)
  await next()
} 
else{
  c.status(403)
  return c.json({error:"unauthorized"})
} 
}
catch(e){
  return c.json("you are not logged in")
}
 
})



// post route for creating a blog
blogRouter.post('/', async(c) => {
  const userId=c.get('userId')
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  

  const body= await c.req.json();
  const {success} =createPostInput.safeParse(body)
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
  try{
    const post = await prisma.post.create({
      data:{
        title:body.title,
        content:body.content,
        authorId:userId

      }
      
    })
    return c.json({
      id:post.id
    })
  }
  catch(e){
    console.log(e);
     c.status(403)
     return c.json({
      error:"error while creating a post"
     })
  }
})

// update route for updating a blog 
blogRouter.put('/:id', async(c) => {
  const userId=c.get('userId')
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body= await  c.req.json()
  const {success} =updatePostInput.safeParse(body)
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
  try{
    prisma.post.update({
      where:{
        id:body.id,
        authorId:userId
      },
      data:{
       title:body.title,
       content:body.content
      }
    })
    return c.text('updated successfully')
  }
 catch(e){
  return c.json("erorr while updateing a post")
 }
})

// route get a specific blogs
blogRouter.get('/:id', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const id = c.req.param('id')
  try{
    const post= await prisma.post.findFirst({
      where:{
        id:id
      }
    })
    // console.log(id);
    return c.json(post)
  }
  catch(e){
    return c.json("error h bhai")
  }

})


//  route  to get all blogs 
blogRouter.get('/bulk', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
try{
  const allPosts= await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
          select: {
              name: true
          }
      }
  }
  })
  console.log(allPosts)
  return c.json({allPosts})
}
catch(e){
  console.log(e)
  return c.json({e})
}
  
})