import axios from "axios";

const CHANGE_PASSWORD_URL = "http://localhost:8080/api/v1/user/change-password";


class ChangePasswordService {
    changePassword(passwordDto){
        return axios.post(CHANGE_PASSWORD_URL, passwordDto);
    }

}

export default new ChangePasswordService();