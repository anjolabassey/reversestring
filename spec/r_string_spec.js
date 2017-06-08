


var request = require("request");
var rstring = require("../rstring.js")


describe("Produce the reverse order of a word: ", function() {
 
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(reverseString('')).toBe(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(reverseString('anna')).toBe(true);
    });

    it("should return true for `NaN`", function() {
      expect(reverseString('NaN')).toBe(true);
    });

    it("should return true for `civic`", function() {
      expect(reverseString('civic')).toBe(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(reverseString('books')).toBe('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(reverseString('solomon')).toBe('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(reverseString('misc')).toBe('csim');
    });

  });

});