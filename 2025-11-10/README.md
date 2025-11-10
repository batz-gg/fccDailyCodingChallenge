# Extension Extractor

Given a string representing a filename, return the extension of the file.

* The extension is the part of the filename that comes after the last period (`.`).
* If the filename does not contain a period or ends with a period, return `"none"`.
* The extension should be returned as-is, preserving case.

## Tests

* **Passed:**1. `getExtension("document.txt")` should return `"txt"`.
* **Passed:**2. `getExtension("README")` should return `"none"`.
* **Passed:**3. `getExtension("image.PNG")` should return `"PNG"`.
* **Passed:**4. `getExtension(".gitignore")` should return `"gitignore"`.
* **Passed:**5. `getExtension("archive.tar.gz")` should return `"gz"`.
* **Passed:**6. `getExtension("final.draft.")` should return `"none"`.
