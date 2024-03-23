import z from 'zod'

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SignUpType = z.infer<typeof signupInput>


export const signInInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type SignInType = z.infer<typeof signInInput>



export const createPostInput = z.object({
    title: z.string(),
    content: z.string()
})

export type CreatePostInput = z.infer<typeof createPostInput>


export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional()
})

export type UpdatePostInput = z.infer<typeof updatePostInput>
