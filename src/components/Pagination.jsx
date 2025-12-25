const Pagination = ({ pageNumber, paginate, next, prev, currentPage, filterCate }) => {
    const handlePageChange = (index) => {
        paginate(index);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <nav aria-label="Page navigation example" className={`${filterCate.length > 0 ? "hidden" : ""}`}>
                <ul className="inline-flex -space-x-px text-sm">
                    <li onClick={prev}>
                        <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">Previous</a>
                    </li>
                    {pageNumber.map((item, i) => (
                        <li key={i} onClick={() => handlePageChange(i)}>
                            <a className={`${currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-white bg-black border border-gray-300 cursor-pointer" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"}`}>
                                {item}
                            </a>
                        </li>
                    ))}
                    <li onClick={next}>
                        <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination;