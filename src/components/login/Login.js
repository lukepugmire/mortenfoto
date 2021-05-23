import { useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { BaseURL} from "../../constants/api";

const url = BaseURL + "auth/local";
console.log(url);

const schema = yup.object().shape({
    username: yup.string().required("Please enter your name"),
    password: yup.string().required("Please enter your password"),
});


export default function Login() {
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        setSubmitting(true);
        console.log(data);

        
        try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
		} catch (error) {
			console.log("error", error);
		} finally {
            setSubmitting(false);
		}
    }
    return (
        <div className="login_container">
            <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={submitting}>
                <div><label for="username">Username</label>
            <input className="form_element" id="username"{...register("username")} />
            {errors.username && <span>{errors.username.message}</span>}</div>
                <div><label for="password">Password</label>
            <input className="form_element" id="password"{...register("password")} />
            {errors.password && <span>{errors.password.message}</span>}</div>
            <button className="form_element">{submitting ? "Loggin in..." : "Login"}</button>
            </fieldset>
            </form>
        </div>
    )
}

