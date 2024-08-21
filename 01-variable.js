
const email = 'wrewewef@naver.com';

let a = email.split('@')
console.log(a)

let first = a[0]
let twice = a[1]

console.log(first)
console.log(twice)

let maskingMail = [];

for (let i = 0; i < first.length; i++) {
    if (i < 4) {
        maskingMail.push(first[i])
    }
    else {
        maskingMail.push("*")
    }
}

maskingMail.push("@")
maskingMail.push(twice)
console.log(maskingMail)
let maskingEMail = maskingMail.join("")
console.log(maskingEMail)

