import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../../assets/bookImg.jpg";
import FormInput from "../../component/formInput/FormInput";
import ChangePasswordService from "../../services/ChangePasswordService";
import { toast } from 'react-toastify';


const ForgetPassword = () => {

    const navigate = useNavigate();

     const [passwordDto, setPasswordDto] = useState({

        email : "",
        oldPassword : "",
        newPassword : "",    
    });

    const inputs = [ 
        
        {
            id : 1,
            name : "email",
            type : "email",
            placeholder : "Enter your email",
            errorMessage : "it should be a valid email address!",
            label : "Email",
            value : passwordDto.email,
            required: true,
          },
        {
          id : 2,
          name : "oldPassword",
          type : "password",
          placeholder : "Current Password",
          errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
          label : "Current Password",
          value : passwordDto.oldPassword,
          pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
  
        {
          id : 3,
          name : "newPassword",
          type : "password",
          placeholder : "New Password",
          errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
          label : "New Password",
          value : passwordDto.newPassword,
          pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        }
  ]

  const onChange = (e) => {
    setPasswordDto({...passwordDto, [e.target.name]: e.target.value});
    
  }

  const changePassword = (e) => {
    e.preventDefault();
    ChangePasswordService.changePassword(passwordDto).then((response) => {

        setPasswordDto(response);
            toast.success("Password changed successfully");  
            console.log(response);

    })
    .catch((error) => {
        console.log(error);    
    })

    setTimeout(() => {
        navigate("/login");
    }, 5000);

  }
    return ( 
        <section>
             <section className="lg:flex">
                <section className="lg:flex-1 non-italic]">
                    <div className="">
                        <h1 className="pt-6 ml-6 mb-20
                            text-2xl font-bold lg:leading-7 text-[#012A4A] lg:pt-20 lg:ml-48"
                        >
                        </h1>
                        <h1 className="ml-6 mb-8
                            text-2xl font-bold text-[#012A4A] lg:leading-7 lg:ml-48"
                        >
                            Reset Password
                        </h1>
                    </div>
                    <form action="/" method="/" onSubmit={changePassword}>
                        <div className="non-italic">
                            {inputs.map((input) => (

                                <FormInput  key={input.id} {...input}  values={passwordDto[input.name]}
                                onChange={onChange} 
                                className="py-2 px-2"
                                />
                            ))}
                            
                            <div className="mb-6">
                            </div>                     
                           <div className="lg:ml-48 non-italic ml-6">
                            <button
                            type="submit" 
                            className="w-[20rem] mb-8 
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            
                            >
                                Reset Password
                            </button>
                           </div>
                        </div>
                    </form>
                </section>
                <section className="lg:flex-1">
                    <div className="hidden lg:flex">
                        <img src={img} alt="image" />
                    </div>
                </section>

            </section>
        </section>
     );
}
 
export default ForgetPassword;