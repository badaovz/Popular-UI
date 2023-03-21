const pagination = (data) => {
    const itemPerPage = 10;
    const totalPages = Math.ceil(data.length / itemPerPage);
    const newData = Array.from({ length: totalPages }, (_, index) => {
        const start = index * itemPerPage;
        return data.slice(start, start + itemPerPage);
    });
    return { newData, totalPages };
};

export default pagination;
