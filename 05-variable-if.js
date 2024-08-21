
const profile = {
    name: "철수",
    age: 10,
    job: "초등 "
}

if (profile.age < 7) return console.log("어린이")
if (profile.age > 8 && profile.age < 19) return console.log("학생")
if (profile.age > 20) return console.log("성인")


