import axios from "axios";

const GET_ALL_BOOKS_BY_USER = "http://localhost:8080/api/v1/book/user";


class GetAllBooksByUser {
    getAllBooksByUserId(userId){
        return axios.get(GET_ALL_BOOKS_BY_USER + "/" + userId);

    }

}

export default new GetAllBooksByUser();