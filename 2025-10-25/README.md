# Нэмэлт ДНХ

ДНХ-ийн дарааллыг төлөөлсөн мөр өгөгдсөн бол дараах дүрмийг ашиглан нэмэлт хэлхээг буцаана уу.

ДНХ нь "A", "C", "G", "T" үсгүүдээс тогтдог.

"А" ба "Т" үсэг нь бие биенээ нөхдөг.

"C" ба "G" үсэг нь бие биенээ нөхдөг.

Жишээлбэл, "ACGT"-ийг өгвөл "TGCA"-г буцаана.

## Tests

* **Passed:** 1. `complementaryDNA("ACGT")` should return `"TGCA"`.
* **Passed:**2. `complementaryDNA("ATGCGTACGTTAGC")` should return `"TACGCATGCAATCG"`.
* **Passed:**3. `complementaryDNA("GGCTTACGATCGAAG")` should return `"CCGAATGCTAGCTTC"`.
* **Passed:**4. `complementaryDNA("GATCTAGCTAGGCTAGCTAG")` should return `"CTAGATCGATCCGATCGATC"`.
