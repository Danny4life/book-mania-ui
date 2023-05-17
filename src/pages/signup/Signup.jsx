import signupImg from "../../assets/bookImg.jpg";


const Signup = () => {
    return ( 
        <section>
           <section className="md:flex">
            <section className="flex-1">
                left
            </section>
            <section className="flex-1">
                <img src={signupImg} alt="signup-image" />
            </section>
           </section>
        </section>
     );
}
 
export default Signup;