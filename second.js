console.log("node.js")

const dateformat = require('dateformat')

const date = Date.now()
console.log(date)

const coucou = dateformat(date, 'dddd dd mm yyyy')
console.log(coucou)