function titleCase(str) {
    str = str.toLowerCase().split(" ");
  
   str = str.map((el)=> {
      return el.replace(el.charAt(0), el.charAt(0).toUpperCase());
    });
   return str.join(" ");
  }
  console.log(titleCase("I'm a little tea pot"));//I'm A Little Tea Pot