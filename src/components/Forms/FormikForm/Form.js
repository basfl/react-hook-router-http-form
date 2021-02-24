import cssClasses from './Form.module.css';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function Formik ({
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
}) {

    return (

        <div className={cssClasses.App}>
            {/* <form
        className={cssClasses.Form}
        onSubmit={handleSubmit}
      >
        <input
          className={cssClasses.Input}
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange} />
        <input
          className={cssClasses.Input}
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange} />
        <button>Submit</button>
      </form> */}
            <Form
                className={cssClasses.Form} >
                <div>
    
                    {touched.email && errors.email ? <p>{errors.email}</p> : null}
                    <Field
                        className={cssClasses.Input}
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div>
                    {touched.password && errors.password ? <p>{errors.password}</p> : null}
                    <Field
                        className={cssClasses.Input}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <label>
                    <Field
                        className={cssClasses.Input}
                        type="checkbox"
                        name="newsletter"
                        checked={values.newsletter}
                    />
        Join newsletter
        </label>
                <Field
                    className={cssClasses.Input}
                    component="select"
                    name="plan"
                >
                    <option value="free">Free</option>
                    <option value="premium">premium</option>
                </Field>
                <button>Submit</button>
            </Form>
        </div>

    );
}


const formikApp = withFormik({
    mapPropsToValues({ email, password, newsletter, plan }) {
        return {
            email: email || "...",
            password: password || "root",
            newsletter: newsletter || true,
            plan: plan || "premium"
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(9).required()
    }),
    handleSubmit(values) {
        console.log(values)
    }
})(Formik)

export default formikApp