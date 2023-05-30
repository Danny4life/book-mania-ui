import axios from "axios";

const CREATE_BOOK_URL = "http://localhost:8080/api/v1/book/create-book";

class CreateBookService{
    createBook(bookDto, id){
        return axios.post(CREATE_BOOK_URL + "/" + id, bookDto);

    }

}



export default new CreateBookService()