import { useState } from "react";
import loginImg from "../../assets/bookImg2.jpg";
import FormInput from "../../component/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import { toast } from 'react-toastify';


const Login = () => {


    const navigate = useNavigate();

    const [loginDto, setLoginDto] = useState({

        email : "",
        password : "",
    });

    const inputs = [      
        {
          id : 1,
          name : "email",
          type : "email",
          placeholder : "Enter your email",
          errorMessage : "it should be a valid email address!",
          label : "Email",
          value : loginDto.email,
          required: true,
        },
  
        {
          id : 2,
          name : "password",
          type : "password",
          placeholder : "Password",
          errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
          label : "Password",
          pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          value : loginDto.password,
          required: true,
        }, 
  ]

  const onChange = (e) => {
    setLoginDto({...loginDto, [e.target.name] : e.target.value});
  }

  const loginUser = (e, id) => {
    e.preventDefault();
    LoginService.loginUser(loginDto).then((response) => {
        setLoginDto(response);
        console.log(response);

        if(response.data.message == "Email does not exists"){
            toast.error("Email does not exists");
        } else if(response.data.message == "Login Successful"){
            navigate(`/user/${id}`);
        }else {
            toast.error("Email or Password not match");
        }
    }, fail => {
        console.error(fail);
    })
    .catch((error) => {
        console.log(error);
    })
  }
  
    return ( 
        <section className="non-italic">
            <section className="flex">
                <section className="flex-1 hidden lg:flex">
                     <img src={loginImg} alt="login-image" />
                </section>
                <section className="flex-1">
                    <div>
                        <h1 className="pt-12 ml-6 mb-12 text-4xl font-bold leading-7 text-[#012A4A] lg:pt-32 lg:ml-48">
                            Bookmania
                        </h1>
                        <h2 className="ml-6 mb-4 text-2xl font-bold text-[#000000] leading-7 lg:ml-48">
                            Hi, Welcome Back
                        </h2>
                    </div>
                    <form action="/" method="/" onSubmit={loginUser}>
                    <div className="non-italic">
                            {inputs.map((input) => (

                                <FormInput  key={input.id} {...input}  values={loginDto[input.name]}
                                onChange={onChange}
                                className="py-2 px-2"
                                 />
                            ))}
                            <div className="mb-6">
                                <Link to="/password-reset" className="ml-6
                                    lg:ml-48 text-base font-normal text-[#4285F4] leading-6">
                                    Forget passord?
                                </Link>
                            </div>                     
                           <div className="lg:ml-48 non-italic ml-6">
                            <button
                            type="submit" 
                            className="w-[20rem] mb-8 
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            
                            >
                                Login
                            </button>
                           </div>
                           <div className="lg:ml-48 ml-6">
                             <Link to="/" className="text-base font-normal text-[#000000] leading-6 cursor-pointer">Don&apos;t have an account? <a className="text-base font-bold leading-6 text-[#4361EE]">Create an account</a></Link>
                           </div>
                        </div>
                    </form>
                </section>
            </section>
        </section>
     );
}
 
export default Login;