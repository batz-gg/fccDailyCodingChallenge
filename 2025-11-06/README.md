# Долоо хоногийн хайгч

YYYY-MM-DD форматтай мөрт огноог өгвөл долоо хоногийн өдрийг буцаана уу. Хүчинтэй буцах өдрүүд нь: "гараг" "" "" "гараг" "Пүрэв гараг" "" "" 

* `"Даваа"`
* `"Мягмар"`
* `"Лхагва"`
* `"Пүрэв"`
* `"Баасан"`
* `"`Бямба `"`
* `"Ням"`

Цагийн бүсийг үл тоомсорлох хэрэгтэй.

## Tests

* **Passed:**1. `getWeekday("2025-11-06")` should return `Thursday`.
* **Passed:**2. `getWeekday("1999-12-31")` should return `Friday`.
* **Passed:**3. `getWeekday("1111-11-11")` should return `Saturday`.
* **Passed:**4. `getWeekday("2112-12-21")` should return `Wednesday`.
* **Passed:**5. `getWeekday("2345-10-01")` should return `Monday`.
