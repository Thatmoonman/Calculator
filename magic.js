const magic = document.getElementsByClassName("magic")[0]
let counter = 1

magic.addEventListener("click", event => {
    const magicNum = document.getElementsByClassName("screen")[0].value
    const title = document.getElementsByClassName("title")[0]

    if (isPrime(magicNum, counter)) {
        let magics = ''
        
        for (let i = 0; i < counter; i++) {
            magics += '!'
        }
        title.innerText = "JUSTIN'S MAGIC CALCULATOR" + magics
        document.body.style.backgroundColor = title.style.color
        shimmer()
        return counter++
    }
})

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}