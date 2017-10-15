const add = o => ({sum: o.a+o.b})
const sub = o => ({sum: o.a-o.b})

const graph = {
  a: {
    out: {
      val: 5
    }
  },
  b: {
    out: {
      val: 6
    }
  },
  d: {
    component: add,
    in: {
      a: 'a.val',
      b: 'b.val'
    }
  },
  c: {
    out: {
      val: 4
    }
  },
  e: {
    component: sub,
    in: {
      a: 'd.sum',
      b: 'c.val'
    }
  }
}

console.log(graph)