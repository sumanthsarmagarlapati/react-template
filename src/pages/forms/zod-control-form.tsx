import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { getUserDetails, userForm, type userFormInterface } from './zod-form';


export default function ZodControlForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm<userFormInterface>({
        resolver: zodResolver(userForm),
        defaultValues: getUserDetails()
    })

    const { fields: Skills, append, remove } = useFieldArray({
        control,
        name: "skills"
    })

    const onSubmit = (data: userFormInterface) => {
        console.log('data', data)

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* {Name} */}
                <div >
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input type='text' {...field} placeholder='Enter name' />
                                {errors?.name ? <p>{errors?.name?.message}</p> : ""}
                            </div>
                        )}
                    >
                    </Controller>

                </div>
                {/* {Email} */}
                <div>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input type="email" placeholder='ENter Email' {...field} />
                                {errors?.email ? <p>{errors?.email?.message}</p> : ""}
                            </div>
                        )}
                    >

                    </Controller>
                </div>

                {/* {Skills} */}
                <div>
                    {Skills.length ? Skills.map((field: Record<string, any>, index: number) => (
                        <>
                            <div key={field.id}>
                                <div>
                                    <Controller
                                        name={`skills.${index}.name`}
                                        control={control}
                                        render={({field})=>(
                                            <div>

                                                <input type='text' placeholder='Enter Skill name' {...field} />
                                                {errors?.skills?.[index]?.name ? <p>{errors?.skills?.[index]?.name?.message}</p> : ""}
                                            </div>
                                        )}
                                    >

                                    </Controller>
                                </div>
                                <div>
                                    <input type='number' min={1} step={1} placeholder='Enter Level' {...register(`skills.${index}.level`)} />

                                    {errors?.skills?.[index]?.level ? <p>{errors?.skills?.[index]?.level?.message}</p> : ""}

                                </div>
                            </div>
                            <div>
                                <Button type='button' onClick={() => remove(index)}>Remove</Button>
                            </div>
                        </>
                    )) : ""}
                </div>
                <div>
                    <Button type='button' onClick={() => append({ name: "", level: 0 })}>Add</Button>
                </div>

                <Button type="submit" >Submit</Button>
                <Button type="button" onClick={() => reset()} >Reset</Button>

            </form>
        </div>
    )
}