require('isomorphic-fetch')
const Node = require("./node")

const url = 'https://api.smartcitizen.me'

// // promise chain
// fetch(url).then(response => response.json()).then(console.log)

// // async/await
// async function fetchURL(url) {
//   const response = await fetch(url)
//   return await response.json()
// }
// fetchURL(url).then(console.log)

const addFn = ({a,b}) => a+b
const subFn = ({a,b}) => a-b

const addNode = (name, fn, inputs) => new Node(name, fn, inputs)

const add = addNode("add", addFn, {a: 5, b: 6})
const sub = addNode("sub", subFn, {a: add().output, b: 4})

add.run()
sub.run()

console.log(sub.output)
// console.log(sub.run())

// console.log(add.attach({a: 2}).attach({b: 4}).run())


// add.attach({a: 10}).run().then(console.log).catch(console.error)