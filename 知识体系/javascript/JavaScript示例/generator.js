function* hello() {
  yield 'hello'
  yield 'world'
  return 'hahah'
}

let he = hello()
he.next()

// for of
function* fibonacci() {
  let [pre, curr] = [0, 1]
  for (;;) {
    [pre, curr] = [curr, pre + curr]
    yield curr
  }
}
for (let n of fibonacci()) {
  if (n > 1000) break
  console.log(n,fibonacci)
}

function* numbers(){
    yield 1
    yield 2
    return 3
    yield 4
}

console.log(...numbers())
console.log(Array.from(numbers()))
let [x,y]=numbers()
console.log(x,y);



function* gen(x){
  let y = yield x+2
  return y
}
let g = gen(1)
console.log(g);
g.next()
g.next()