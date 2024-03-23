import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt';
import { signupInput } from 'tushar-medium';


 export  const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL:string,
      JWT_SECRET:string
    },
    Variables:{
      userId:string
    }
  }>();

//signup route
userRouter.post('/signup',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body= await c.req.json();
    const {success} =signupInput.safeParse(body)
    if(!success){
      c.status(411)
      return c.json({
        message:"inputs are not correct"
      })
    }
    try{
      const user=await prisma.user.create({
        data:{
          email:body.email,
          password:body.password,
          name:body.name
      
        }
      })
      const token =await sign({id:user.id},c.env.JWT_SECRET)
      return c.json({token})
    
    }
      catch(e){
        c.status(403)
        return c.json({error:"error while signing up"})
      }
    
    })
    
    
    //signin route
    userRouter.post('/signin',async (c) => {
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
    

    