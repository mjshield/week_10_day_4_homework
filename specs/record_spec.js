var assert = require("assert");
var Record = require("../record.js");

describe("Record", function() {

var record1;
var record2;

beforeEach(function(){
  record1 = new Record("Mattew", "No Job yet", "blues", 100);
  record2 = new Record("Yan", "Hunting foe Job yet", "Rock", 200);

})

it("has an Artist", function() {
  assert.strictEqual(record1.artist,"Mattew");
}),

it("has an Title", function() {

  assert.strictEqual(record1.title, "No Job yet");
}),

it("has an Genre", function() {

  assert.strictEqual(record2.genre, "Rock");
}),

it("has an Price", function() {

  assert.strictEqual(record2.price, 200);
}),

it("could print out property", function() {

  assert.strictEqual(record1.printOutProperty(), "Artist: Mattew Title: No Job yet Genre: blues Price: 100")
})



























})