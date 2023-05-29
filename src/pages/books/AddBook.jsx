import Topbar from "../../component/topbar/Topbar";

const AddBook = () => {
    return ( 
        <section>
            <nav className="bg-[#F5F5F5] top-0 right-0 left-0 z-10">
                <Topbar />
            </nav>
            <section className="max-w-2xl flex shadow border-b mx-auto">
                <div className="px-8 py-8">
                    <div className="font-thin text-2xl tracking">
                        <h1 className="md:text-2xl text-base font-bold text-[#012A4A]">Add New Book</h1>
                    </div>
                    <form action="#">
                        <div className="items-center justify-center h-14 w-full my-4">
                            <label htmlFor="title" className="block text-gray-600 font-normal text-sm">
                                Title
                            </label>
                            <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Enter book title"
                                className="h-10 md:w-96 border mt-2 px-2 py-2 w-80"  
                            />
                        </div>
                        <div className="items-center justify-center h-14 w-full my-4 pt-2">
                            <label htmlFor="author" className="block text-gray-600 font-normal text-sm">
                                Author
                            </label>
                            <input 
                                type="text" 
                                name="author" 
                                id="author" 
                                placeholder="Enter book author"
                                className="h-10 md:w-96 border mt-2 px-2 py-2 w-80"  
                            />
                        </div>
                        <div className="items-center justify-center h-14 w-full my-4 pt-4">
                            <label htmlFor="pages" className="block text-gray-600 font-normal text-sm">
                                Pages
                            </label>
                            <input 
                                type="number" 
                                name="pages" 
                                id="pages" 
                                placeholder="Enter book pages"
                                className="h-10 md:w-96 border mt-2 px-2 py-2 w-80"  
                            />
                        </div>
                        <div className="items-center justify-center h-14 w-full my-4 pt-6">
                            <label htmlFor="status" className="block text-gray-600 font-normal text-sm">
                                Status
                            </label>
                            <input 
                                type="text" 
                                name="status" 
                                id="status" 
                                placeholder="Enter book status"
                                className="h-10 md:w-96 border mt-2 px-2 py-2 w-80"  
                            />
                        </div>
                        <div className="items-center justify-center h-14 w-full my-4 space-x-8 pt-12">
                            <button 
                                type="button"
                                className="bg-green-400 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold md:w-44 w-36"
                            >
                                Save
                            </button>
                            <button 
                                type="button"
                                className="bg-red-400 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold md:w-44 w-36"
                            >
                                Clear
                            </button>

                        </div>
                    </form>
                </div>

            </section>
        </section>
     );
}
 
export default AddBook;