const products = [
    { name: 'Shampo', priec: 300},
    { name: 'book', priec: 1300},
    { name: 'Jama', priec: 320},
    { name: 'shop', priec: 30},
]


function getShopingProce(products){
    let sum = 0;
    for(const pr of products)
    {
        sum += pr.priec;
    }
    return sum;
} 

const total = getShopingProce(products);
console.log(total);