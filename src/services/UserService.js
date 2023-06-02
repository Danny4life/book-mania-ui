import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user/register";

class UserService{
    registerUser(userDto){
        return axios.post(USER_API_BASE_URL, userDto);
    }


    getUserById(id){
        return axios.get(USER_API_BASE_URL + "/" + id);

    }

}

export default new UserService();