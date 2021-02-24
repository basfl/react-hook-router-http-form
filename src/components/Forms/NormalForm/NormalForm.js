import { validateYupSchema } from "formik";
import { useState } from "react";
import cssClasses from "./NormalForm.module.css"


const NormalForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    })

    const validate = ({ firstName, lastName }) => {
        if (firstName.length && lastName.length < 3) {
            return false
        }

    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData)
        validate(formData) ? console.log(formData) : console.log("invalid")
    }

    const changeHandler = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value

        }));
    }

    return (
        <div className={cssClasses.App}>
            Normal Form :
            <form className={cssClasses.Form} onSubmit={submitHandler}>

                <input type="text" placeholder="firstName"
                    value={formData.firstName}
                    name="firstName"
                    onChange={changeHandler}
                />
                <input type="text"
                    placeholder="lastName"
                    value={formData.lastName}
                    name="lastName"
                    onChange={changeHandler}
                />

                <button>submit</button>
            </form>
        </div>
    );

}



export default NormalForm

