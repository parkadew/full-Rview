
// let random = () => {
//     let arr = []


// }

// let a = random()
// console.log(a)

let arr = [];
let isStarted = false;

let RandomNum = () => {


    if (isStarted === false) {
        // 타이머가 작동중이 아닐떄??
        isStarted === true


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

        let time = 10;

        setInterval(() => {
            if (time >= 0) {
                const min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById('timer').innerText = min + ":" + sec
                time = time - 1
            }
            else {
                document.getElementById('finish').disabled = true
                isStarted === false;
            }
        }, 1000);

    } else {
        // 타이머가 작동중일떄
    }




}
