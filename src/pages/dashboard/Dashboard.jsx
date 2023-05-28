
import Topbar from "../../component/topbar/Topbar";
import BookList from "../books/BookList";


const Dashboard = () => {
    return ( 
        <section>
            <nav className="bg-[#F5F5F5] top-0 right-0 left-0 z-10">
                <Topbar />    
            </nav>
            <section>
                <BookList />
            </section>
        </section>
     );
}
 
export default Dashboard;