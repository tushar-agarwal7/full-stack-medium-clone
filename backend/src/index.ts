import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  },
  Variables:{
    userId:string
  }
}>();

app.use('/*',cors())

app.route('api/v1/user',userRouter);
app.route('api/v1/blog',blogRouter)

app.get('/blogs',async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
try{
  const blogs= await prisma.post.findMany({
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
  return c.json(blogs)
}
catch(e){
  console.log(e)
  return c.json({e})
}
})


// route get a specific blogs
app.get('blog/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const id = c.req.param('id')
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: id
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })
    return c.json({post})
  }
  catch (e) {
    return c.json("error h bhai")
  }

})


 
export default app;

