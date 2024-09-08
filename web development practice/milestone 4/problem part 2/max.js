let a = [10,11,2,4,4,122]

function getMax(num){
    let m = -Infinity;
    for(const l of num){
        if(m < l)
        {
            m = l;
        }
    }
    return m;
}

console.log(getMax(a));