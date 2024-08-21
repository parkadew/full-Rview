
let friend = {
    name: "관형",
    age: "22",
    job: "취준"
}

console.log(friend.name)

const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인" },
    { number: 3, title: "딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "망고" },
    { number: 7, title: "딸딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과인세트" },
    { number: 10, title: "귤" },
]

let array = [];

for (let i = 0; i < fruits.length; i++) {
    array.push(fruits[i].number + fruits[i].title);

}
console.log(array)

// 또 for문에 대한 사용법이 많이 미숙하다
// array.push(fruits[0].number + fruits[0].title)

