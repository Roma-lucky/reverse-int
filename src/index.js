module.exports = function reverse (n) {
    if (n<0) {
        n = Math.abs(n);
    }
    let arr = [];
    arr = arr.concat(n);
     arr = arr.join().split('').reverse().join('');
     return +arr;
}
