import loginImg from "../../assets/bookImg2.jpg";


const Login = () => {
    return ( 
        <section>
            <section className="flex">
                <section className="flex-1">
                     <img src={loginImg} alt="login-image" />
                </section>
                <section className="flex-1">
                    right
                </section>
            </section>
        </section>
     );
}
 
export default Login;