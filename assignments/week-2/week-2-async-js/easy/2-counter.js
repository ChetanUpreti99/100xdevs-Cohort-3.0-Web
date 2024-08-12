let count = 0;
function counter() {
    count++;
    setTimeout(() => {
        console.log(count);
        counter();
    }, 1000)
}
counter();

