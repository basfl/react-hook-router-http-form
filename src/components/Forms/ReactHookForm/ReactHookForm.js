import React, { useEffect, useState } from 'react'
import cssClasses from './ReactHookForm.module.css'
import { useForm } from 'react-hook-form'
const InputForm = (props) => {
    const { register, handleSubmit, errors } = useForm()
    // const[firstName,setFirstName]=useState("ben")
    // const[lastName,setlastName]=useState("ben")



    // const changeHaler=(event)=>{
    //     console.log("**event",[event.target.name])
    //   //  if [event.target.name]
    //     setFirstName(event.target.value)
    // }
    const onSubmit = (data) => {
        console.log("form", data)
    }
    return (
        <div className={cssClasses.App}>
            Reatc Hook Form
            <form className={cssClasses.Form} onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="firstName" ref={register} name="firstName" />
                <input type="text" placeholder="lastName" ref={register({
                    required: true,
                    minLength: 5,

                })} name="lastName" />
                {errors.lastName}
                <button>submit</button>
            </form>
        </div>
    )
}

export default InputForm