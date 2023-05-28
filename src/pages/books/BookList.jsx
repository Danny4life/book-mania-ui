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
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr className="flex justify-between">
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">TITLE</th>
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">AUTHOR</th>
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">PAGES</th>
                            <th className="text-left text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">STATUS</th>
                            <th className="text-right text-xs font-medium md:text-base text-gray-500 uppercase md:tracking-wider py-3 md:px-6">ACTIONS</th>
                        </tr>
                    </thead>

                </table>

            </section>
        </section>
    );
}
 
export default BookList;