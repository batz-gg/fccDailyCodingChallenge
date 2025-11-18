# Fingerprint Test

Given two strings representing fingerprints, determine if they are a match using the following rules:

* Each fingerprint will consist only of lowercase letters (`a-z`).
* Two fingerprints are considered a match if:
  * They are the same length.
  * The number of differing characters does not exceed 10% of the fingerprint length.

## Tests

* **Passed:**1. `isMatch("helloworld", "helloworld")` should return `true`.
* **Passed:**2. `isMatch("helloworld", "helloworlds")` should return `false`.
* **Passed:**3. `isMatch("helloworld", "jelloworld")` should return `true`.
* **Passed:**4. `isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog")` should return `true`.
* **Passed:**5. `isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog")` should return `true`.
* **Passed:**6. `isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat")` should return `false`.
