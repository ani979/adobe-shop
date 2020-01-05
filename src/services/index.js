export const getVisibleproducts = (data, {value, sortBy, searchText}) => {
    return data.products.filter(product => {
        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;
        const foundItem = searchText ? product.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1: true;
        return startPriceMatch && endPriceMatch && foundItem;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Discount') {
            return product2.discount < product1.discount ? -1 : 1;
        } else {
            return product2.id >= product1.id;
        }
    });
}

export const getCartTotal = cartItems => {
    var total = 0;
    var actualCost = 0;
    var count = 0;
    for(var i=0; i<cartItems.length; i++) {
        total += parseInt(cartItems[i].sum, 10)
        actualCost += parseInt(cartItems[i].qty, 10)*parseInt((cartItems[i].price), 10);
        count += parseInt(cartItems[i].qty, 10)
    }
    return {actualCost, actualCost, total: total, discount:(actualCost-total), count: count};
}
