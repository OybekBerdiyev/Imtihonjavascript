const sum = (a) => {
    return (b) => {
        return b? sum(a+b) : a;
    }
}
console.log(sum(2)(4)(1)());