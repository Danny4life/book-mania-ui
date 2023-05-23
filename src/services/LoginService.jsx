import axios from "axios";

const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/user/login";


class LoginService {
    loginUser(loginDto){
        return axios.post(LOGIN_API_BASE_URL, loginDto);
    }

}

export default new LoginService();