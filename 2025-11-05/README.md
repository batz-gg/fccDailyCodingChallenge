# Mатриц бүтээгч

Өгөгдсөн хоёр бүхэл тоо (хэд хэдэн мөр ба багана) өгөгдсөн хэмжээтэй тэгээр (0) дүүргэсэн матрицыг (массивын массив) буцаана. Жишээлбэл, 2 ба 3-ыг өгвөл буцаана:iven two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (`0`) of the given size.

For example, given `2` and `3`, return:

```json
[
  [0, 0, 0],
  [0, 0, 0]
]
```


## Tests

* **Passed:**1. `buildMatrix(2, 3)` should return `[[0, 0, 0], [0, 0, 0]]`.
* **Passed:**2. `buildMatrix(3, 2)` should return `[[0, 0], [0, 0], [0, 0]]`.
* **Passed:**3. `buildMatrix(4, 3)` should return `[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]`.
* **Passed:**4. `buildMatrix(9, 1)` should return `[[0], [0], [0], [0], [0], [0], [0], [0], [0]]`.
