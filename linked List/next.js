//next(value)

function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const g = gen(); // "Generator { }"
  console.log(g.next());      // "Object { value: 1, done: false }"
  console.log(g.next());// "Object { value: 2, done: false }"
  console.log(g.next());// "Object { value: 3, done: false }"
  console.log(g.next());// "Object { value: undefined, done: true }"