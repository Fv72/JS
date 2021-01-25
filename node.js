const third = require("./third")
const { Florentin } = require("./third")

console.log("florentin")

require("./second")

const number = 71

require("./third").test(number)

const user = [{
    name: "Florentin",
    age: 25
}, {
    name: "Darcy",
    age: 23
}]

user.forEach(el => {

    console.log(el.name)
    third.user(el.name, el.age)
});

// third.user(user.name, user.age)