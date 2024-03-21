import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';

// Create the main Hono app
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>();
app.get('/',(c)=>{
  return c.text('hello')
})


//signup route
app.post('/api/v1/user/signup',async (c) => {
const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body= await c.req.json();

try{
  const user=await prisma.user.create({
    data:{
      email:body.email,
      password:body.password,
      name:body.name
  
    }
  })
  const token =await sign({id:user.id},c.env.JWT_SECRET)
  return c.json({jwt:token})

}
  catch(e){
    c.status(403)
    return c.json({error:"error while signing up"})
  }

})


//signin route
app.post('/api/v1/user/signin',async (c) => {
const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body=await c.req.json()

const user=await prisma.user.findUnique({
  where:{
    email:body.email,
    password:body.password,
  }
})

if(!user){
  return c.json("User not exist")
}

const token=await sign({id:user.id},c.env.JWT_SECRET)
	return c.json({token})
})



app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})


app.post('/api/v1/blog', (c) => {

	return c.text('signin route')
})


app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})


export default app;
