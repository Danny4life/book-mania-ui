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
                        <tr>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-8">TITLE</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">AUTHOR</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">PAGES</th>
                            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">STATUS</th>
                            <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">ACTIONS</th>
                        </tr>

                    </thead>

                </table>

            </section>
        </section>
    );
}
 
export default BookList;