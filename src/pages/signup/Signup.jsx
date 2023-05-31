import { useState } from "react";
import signupImg from "../../assets/bookImg.jpg";
import FormInput from "../../component/formInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { toast } from "react-toastify";


const Signup = () => {

    const navigate = useNavigate();
    
    const [userDto, setUserDto] = useState({
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
            value : userDto.firstname,
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
            value : userDto.lastname,
            required: true,
        },
        {
            id : 3,
            name : "email",
            type : "email",
            placeholder : "Enter your email",
            errorMessage : "it should be a valid email address!",
            label : "Email",
            value : userDto.email,
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
            value : userDto.password,
            required: true,
        },
    
        {
            id : 5,
            name : "confirmPassword",
            type : "password",
            placeholder : "Confirm Password",
            errorMessage : "password don't match!",
            label : "Confirm Password",
            pattern : userDto.password,
            required: true,
        }
          
    ]

    const onChange = (e) => {
        setUserDto({...userDto, [e.target.name]: e.target.value});
    }

    const registerUser = async (e) => {
        e.preventDefault();
        await UserService.registerUser(userDto).then((response) =>  {
            setUserDto(response);
            
            //console.log(response);
            if(response.data.message == "Email Already Exists"){
                toast.error("Email Already Exists");
               

            }else if(response.data == "Account Created Successfully"){
               
                setTimeout(() => {
                    navigate("/login");
                }, 3000);

                toast.success("Account Created Successfully");
                
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
           <section className="md:flex">
            <section className="md:flex-1">
                <div>
                    <h1 className="pt-12 ml-6 mb-12 text-4xl font-bold leading-7 text-[#012A4A] lg:pt-32 lg:ml-48">
                        Bookmania
                    </h1>
                    <h2 className="ml-6 mb-4 text-2xl font-bold text-[#000000] leading-7 lg:ml-48">
                        Get Started with Bookmania
                    </h2>
                </div>
                <form action="/" method="/" onSubmit={registerUser}>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input}  values={userDto[input.name]}
                        onChange={onChange}
                        className="py-2 px-2"
                    />
                    ))}
                     <div className="non-italic">
                           <div className="lg:ml-48 non-italic ml-6">
                            <button 
                            type="submit"
                            className="w-[18rem] mb-12 mt-10 ml-2 lg:ml-0 
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            
                            >
                                Sign Up
                            </button>
                           </div>
                           <div className="lg:ml-48 ml-6">
                             <Link to="/login" className="text-base font-normal text-[#000000] leading-6 cursor-pointer">
                                Already have an account? <a className="font-bold">Login</a>
                            </Link>
                           </div>
                        </div> 
                </form>
            </section>
            <section className="md:flex-1 hidden lg:flex">
                <img src={signupImg} alt="signup-image" className="" />
            </section>
           </section>
        </section>
     );
}
 
export default Signup;