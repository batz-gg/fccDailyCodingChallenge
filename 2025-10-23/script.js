function favoriteSongs(playlist) {
  playlist.sort((a, b) => b.plays - a.plays);
  const topTwo = playlist.slice(0, 2);
  return topTwo.map(song => song.title);
}

console.log(favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ])); // Output: ["Sync or Swim", "Earbud Blues"]
console.log(favoriteSongs([{"title": "Hello World", "plays": 5}, {"title": "Code Jam", "plays": 5}, {"title": "Debugging Days", "plays": 4} ])); // Output: ["Hello World", "Code Jam"] 