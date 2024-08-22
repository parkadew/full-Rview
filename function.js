
// let random = () => {
//     let arr = []


// }

// let a = random()
// console.log(a)

let arr = [];

let RandomNum = () => {
    arr = [];

    const RandomArr = () => {
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * 10)
            arr.push(random)
        } return arr
    }
    RandomArr()
    console.log(arr)

    let StringNumber = arr.join('')
    console.log(StringNumber)

    document.getElementById("target").innerText = StringNumber
    document.getElementById("target").style.color = "#" + StringNumber

    let time = 5;

    setInterval(() => {
        if (time >= 0) {
            const min = Math.floor(time / 60)
            let sec = String(time % 60).padStart(2, "0")
            document.getElementById('timer').innerText = min + ":" + sec
            time = time - 1
        }
        else {
            document.getElementById('finish').disabled = true
        }
    }, 1000);

}
