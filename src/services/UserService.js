import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user/register";

class UserService{
    registerUser(userDto){
        return axios.post(USER_API_BASE_URL, userDto);
    }

}

export default new UserService();