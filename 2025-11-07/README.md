# Тоолох картууд

A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

* Захиалга хамаагүй. А картыг, дараа нь В картыг сонгох нь В, дараа нь А картыг сонгохтой ижил байна.

Жишээлбэл, 52-ыг өгвөл 1-ийг буцаана. 52 картын тавцангаас сонгох 52 картын ганцхан хослол байна. Мөн 2-ыг өгвөл 1326-г буцаавал тавцангаас 2 карт сонгоход 1326 картын хослол гарч ирнэ.

## Tests

* **Passed:**1. `combinations(52)` should return `1`.
* **Passed:**2. `combinations(1)` should return `52`.
* **Passed:**3. `combinations(2)` should return `1326`.
* **Passed:**4. `combinations(5)` should return `2598960`.
* **Passed:**5. `combinations(10)` should return `15820024220`.
* **Passed:**6. `combinations(50)` should return `1326`.
