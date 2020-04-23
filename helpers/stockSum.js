function stockSum (arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i].stock
    }
    return sum
}

module.exports = stockSum