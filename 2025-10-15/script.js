function stripTags(html) {
  return html.replace(/<[^>]*>/g, '');
}

// Tests
console.log(stripTags('<a href="#">Click here</a>')); // "Click here"
console.log(stripTags('<p class="center">Hello <b>World</b>!</p>')); // "Hello World!"
console.log(stripTags('<img src="cat.jpg" alt="Cat">')); // ""
console.log(stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>')); // "sectionsection"