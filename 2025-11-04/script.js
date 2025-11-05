function imageSearch(images, term) {
  let results = [];
  for (let i=0; i<images.length; i++){
    // console.log(images[i]);
    if (images[i].toLowerCase().includes(term.toLowerCase())) {
      results.push(images[i]);
    }
  }
  return results;
}

console.log(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"));