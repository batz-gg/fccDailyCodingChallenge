function findLandingSpot(matrix) {
    const R = matrix.length; // Мөрийн тоо
    if (R === 0) return null;
    const C = matrix[0].length; // Баганын тоо

    // Дээш, Доош, Баруун, Зүүн чиглэлд шилжих индексүүд
    const directions = [
        [-1, 0], // Дээш (Мөр: -1)
        [1, 0],  // Доош (Мөр: +1)
        [0, -1], // Зүүн (Багана: -1)
        [0, 1]   // Баруун (Багана: +1)
    ];

    let minDanger = Infinity; // Хамгийн бага аюулыг хадгалах, эхлээд хязгааргүй их утгатай байна.
    let safestSpot = null; // Хамгийн аюулгүй цэгийн индекс (мөр, багана)

    // Матриц дээр давталт хийх
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            // 1. Зөвхөн буух боломжтой цэгүүдийг (0) шалгана.
            if (matrix[r][c] === 0) {
                let currentDanger = 0;

                // 2. 4 хөршийн нийт аюулыг тооцох.
                for (const [dr, dc] of directions) {
                    const nr = r + dr; // Хөршийн мөрийн индекс
                    const nc = c + dc; // Хөршийн баганын индекс

                    // 3. Хөрш нь хүснэгтийн хил дотор байгаа эсэхийг шалгана.
                    if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
                        // Аюулын утгыг (1-9) нийлбэрт нэмнэ.
                        currentDanger += matrix[nr][nc];
                    }
                    // Хэрэв хилээс гадуур бол энэ хөршийг үл тооно.
                }

                // 4. Хамгийн бага аюулыг шинэчилнэ. (Даалгаврын дагуу зөвхөн нэг хамгийн аюулгүй цэг байна)
                if (currentDanger < minDanger) {
                    minDanger = currentDanger;
                    safestSpot = [r, c]; // [мөрийн индекс, баганын индекс]
                }
            }
        }
    }

    return safestSpot;
}