import { useState } from "react";
import signupImg from "../../assets/bookImg.jpg";


const Signup = () => {

    const [user, setUser] = useState({
        id : "",
        firstname : "",
        lastname : "",
        email : "",
        password : "",
        confirmPassword : "",
    });

    const inputs = [
        {
            id : 1,
            name : "firstname",
            type : "text",
            placeholder : "Enter your first name",
            errorMessage: "First name must be enter!",
            label : "First Name",
            pattern : "^[A-Za-z0-9]{3,16}$",
            value : user.firstname,
            required: true,
        },
        {
            id : 2,
            name : "lastname",
            type : "text",
            placeholder : "Enter your last name",
            errorMessage: "Last name must be enter!",
            label : "Last Name",
            pattern : "^[A-Za-z0-9]{3,16}$",
            value : user.lastname,
            required: true,
        },
        {
            id : 3,
            name : "email",
            type : "email",
            placeholder : "Enter your email",
            errorMessage : "it should be a valid email address!",
            label : "Email",
            value : user.email,
            required: true,
        },
        {
            id : 4,
            name : "password",
            type : "password",
            placeholder : "Password",
            errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
            label : "Password",
            pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            value : user.password,
            required: true,
        },
    
        {
            id : 5,
            name : "confirmpassword",
            type : "password",
            placeholder : "Confirm Password",
            errorMessage : "password don't match!",
            label : "Confirm Password",
            pattern : user.password,
            required: true,
        }
          
    ]

    const onChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    return ( 
        <section className="non-italic">
           <section className="md:flex">
            <section className="md:flex-1">
                <div>
                    <h1 className="pt-12 ml-6 mb-20 text-4xl font-bold leading-7 text-[#012A4A] lg:pt-40 lg:ml-48">
                        Bookmania
                    </h1>
                    <h2 className="ml-6 mb-8 text-2xl font-bold text-[#000000] leading-7 lg:ml-48">
                        Get Started with Bookmania
                    </h2>
                </div>
                <form action="/" method="/"></form>
            </section>
            <section className="md:flex-1 hidden lg:flex">
                <img src={signupImg} alt="signup-image" className="" />
            </section>
           </section>
        </section>
     );
}
 
export default Signup;