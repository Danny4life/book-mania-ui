import Topbar from "../../component/topbar/Topbar";

const Dashboard = () => {
    return ( 
        <section>
            <nav className="bg-[#0D1027] fixed top-0 right-0 left-0 z-10">
                <Topbar />
            </nav>
        </section>
     );
}
 
export default Dashboard;