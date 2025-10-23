# Дуртай дуунууд

iPod-уудыг санаж байна уу? Анхны загвар нь 24 жилийн өмнө буюу 2001 оны 10-р сарын 23-нд гарсан.
Таны iPod тоглуулах жагсаалтыг төлөөлж буй дууны объектуудын массивыг өгвөл хамгийн их тоглосон хоёр дууны нэр бүхий массивыг эхлээд хамгийн их тоглосон дууг буцаана уу.
Объект бүр "гарчиг" шинж чанартай (мөр), "тоглох" шинж чанартай (бүхэл тоо) байна.

## Tests

Passed:1. favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]) should return ["Sync or Swim", "Earbud Blues"].

Passed:2. favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]) should return ["Clickwheel Love", "99 Downloads"].

Passed:3. favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]) should return ["Song B", "Song C"].
