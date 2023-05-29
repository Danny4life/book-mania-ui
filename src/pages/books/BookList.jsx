import { Link } from "react-router-dom";

const BookList = () => {
    return (  
        <section className="container mx-auto my-8">
            <section className="h-12">
                <button type="button"  className="rounded bg-slate-600 text-white md:px-14 
                px-6 py-2 font-semibold md:ml-[-8px] ml-4">
                    Add Books
                </button>
            </section>
            <div>

            </div>
            <section className="flex shadow border-b md:ml-[-8px] ml-4">
                <table className="min-w-full flex md:flex-col justify-between">
                    <thead className="bg-gray-50">
                        <tr className="flex md:justify-between flex-col md:flex-row">
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">TITLE</th>
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">AUTHOR</th>
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">PAGES</th>
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">STATUS</th>
                            <th className="md:text-right text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="flex md:justify-between flex-col md:flex-row">
                            <td className="md:text-left md:px-6 md:py-4 py-2 px-4 md:whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                    Things Fall Apart
                                </div>
                            </td>
                            <td className="md:text-left md:px-6 md:py-4 py-2 px-4 md:whitespace-nowrap md:relative">
                                <div className="text-sm text-gray-500 md:absolute md:right-[12px]">
                                    Chinua Achebe
                                </div>
                            </td>
                            <td className="md:text-left md:px-6 md:py-4 py-2 px-4 md:whitespace-nowrap md:relative pt-5">
                                <div className="text-sm text-gray-500 md:absolute md:right-[20px]">
                                    300
                                </div>
                            </td>
                            <td className="md:text-left md:px-6 md:py-4 py-2 px-4 md:whitespace-nowrap md:relative">
                                <div className="text-sm text-gray-500 md:absolute right-[-4px]">
                                    READ
                                </div>
                            </td>
                            <td className="md:text-right text-left md:px-6 md:py-4 py-2 px-2 md:whitespace-nowrap md:relative left-2">
                                <Link href="" className="text-indigo-600 hover:text-indigo-800 px-2">
                                    Edit
                                </Link>
                                <Link href="" className="text-red-600 hover:text-red-800 px-2">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
}
 
export default BookList;