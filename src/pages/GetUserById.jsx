import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { useParams } from "react-router-dom";

const GetUserById = () => {

    const {id} = useParams();
    const [userDto, setUserDto] = useState({

        id : "",
        firstname : "",
        lastname : "",
        email : "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUserDto({...userDto, [e.target.name] : value});
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserService.getUserById(id);
                setUserDto(response.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    return ( 
        // <div className="max-w-2xl flex shadow border-b mx-auto">
        //     <div className="px-8 py-8">
        //         <div className="font-thin text-2xl tracking">
        //             <h1>Users</h1>
        //         </div>
        //         <div className="items-center justify-center h-14 w-full my-4">
        //             <label htmlFor="firstname" className="block text-gray-600 font-normal text-sm">First Name</label>
        //             <input 
        //             type="text"
        //             name="firstname"
        //             value={userDto.firstname}
        //             onChange={(e) => handleChange(e)}
        //             className="h-10 w-96 border mt-2 px-2 py-2"
        //              />
        //         </div>
        //         <div className="items-center justify-center h-14 w-full my-4">
        //             <label htmlFor="lastname" className="block text-gray-600 font-normal text-sm">Last Name</label>
        //             <input type="text"
        //             name="lastname"
        //             value={userDto.lastname}
        //             onChange={(e) => handleChange(e)}
        //             className="h-10 w-96 border mt-2 px-2 py-2"
        //              />
        //         </div>
        //         <div className="items-center justify-center h-14 w-full my-4">
        //             <label htmlFor="email" className="block text-gray-600 font-normal text-sm">Email</label>
        //             <input type="email"
        //             name="email"
        //             value={userDto.email}
        //             onChange={(e) => handleChange(e)}
        //             className="h-10 w-96 border mt-2 px-2 py-2"
        //              />
        //         </div>

        //     </div>
            
        // </div>

        <div>
           <div className="flex gap-1">
            <span name="firstname" onChange={(e) => handleChange(e)}>
                {userDto.firstname}
            </span>
            <span name="lastname" onChange={(e) => handleChange(e)}>
                {userDto.lastname}
            </span>
           </div>
           <div name="email" onChange={(e) => handleChange(e)}>
                {userDto.email}
            </div>
        </div>
     );
}
 
export default GetUserById;