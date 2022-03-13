const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));//["a", "b", "c"]
  console.log(Object.values(object1));//[ 'somestring', 42, false ]
  console.log(Object.entries(object1))//[ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]
  console.log(object1)//{ a: 'somestring', b: 42, c: false }
  