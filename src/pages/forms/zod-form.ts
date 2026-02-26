import z from 'zod';

export const userForm = z.object({
    name: z.string({ required_error: "Name is required" }).min(2, { message: "Min length is 2" }).max(10, { message: "Max name length is 10" }),
    email: z.string({ required_error: "Email is required" }).email({ message: "Email is required" }),
    address: z.string().optional(), 
    skills: z.array(
        z.object({
            name: z.string({ required_error: "Skill name required" }).min(3, { message: "name is greater than 3" }).max(4, { message: "name is max 10 length" }),
            level: z.string({ required_error: "Level count is requires" }).transform((val) => Number(val)).refine((val) => val > 0, { message: "value must be a postive number" })
        })
    )
})

export type userFormInterface = z.infer<typeof userForm>

export function getUserDetails() {
    return {
        name: "",
        email: "",
        skills: [{ name: "", level: 0 }]
    }
}