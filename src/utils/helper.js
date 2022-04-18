export const getFilteredData = (data, key, value) => {
    const result = data && data.filter((item) => {
        if(item[key].toString() === value)
            return item
    })
    return result ? result : data;
}
