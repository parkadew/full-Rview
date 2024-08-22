let time = 180;

setInterval(() => {
    if (time >= 0) {
        const min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
}, 1000);

// 타이머 생성
