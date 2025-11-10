# Word Search

Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

* The given matrix will be filled with all lowercase letters (`a-z`).
* The word to find will always be in the matrix exactly once.
* The word to find will always be in a straight line in one of these directions:
  * left to right
  * right to left
  * top to bottom
  * bottom to top

For example, given the matrix:

```md
[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
```

And the word `"cat"`, return:

```md
[[0, 1], [2, 1]]
```

Where `[0, 1]` are the indices for the `"c"` (start of the word), and `[2, 1]` are the indices for the `"t"` (end of the word).

Өгүүлбэрийн мөр өгөгдсөн бол өгүүлбэрт байгаа үгсийн тоог буцаана уу. Үг нь хоосон зайгүй тэмдэгтүүдийн дурын дараалал бөгөөд нэг хоосон зайгаар тусгаарлагддаг.

## Tests

* **Passed:**1. `findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat")` should return `[[0, 1], [2, 1]]`.
* **Passed:**2. `findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog")` should return `[[0, 0], [0, 2]]`.
* **Passed:**3. `findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish")` should return `[[3, 3], [0, 3]]`.
* **Passed:**4. `findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox")` should return `[[1, 3], [1, 1]]`.
