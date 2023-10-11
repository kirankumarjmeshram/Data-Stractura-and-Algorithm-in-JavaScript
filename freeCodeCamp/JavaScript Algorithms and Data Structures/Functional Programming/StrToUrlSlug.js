// Only change code below this line
function urlSlug(title) {
    return title.trim().split(' ').filter(substr => substr !== "").map(el=>el.toLowerCase()).join("-")
  
  }
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")) //a-mind-needs-books-like-a-sword-needs-a-whetstone