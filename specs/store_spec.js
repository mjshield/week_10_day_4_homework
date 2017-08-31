var assert = require("assert");
var Store = require("../store.js");
var Record = require("../record.js");

describe("Store", function() {

  var store1;
  var record1;
  var record2;

  beforeEach(function(){
    store1 = new Store("Mattew's shop", "LA");
    record1 = new Record("Mattew", "No Job yet", "blues", 100);
    record2 = new Record("Yan", "Hunting foe Job yet", "Rock", 200);
  }),

  it("has a name", function(){
    assert.strictEqual(store1.name, "Mattew's shop");
  }),


  it("has a city", function(){
    assert.strictEqual(store1.city, "LA");
  }),

  it("has an empty inventory", function(){
    assert.strictEqual(store1.inventory.length, 0);
  }),

  it("has an empty balance", function(){
    assert.strictEqual(store1.balance, 0);
  }),

  it("can add record to inventory", function() {
    store1.addRecord(record1);
    assert.strictEqual(store1.inventory[0], record1);
  }),

  it("list inventory", function() {
    store1.addRecord(record1);
    store1.addRecord(record2);
    assert.deepEqual(store1.listInventory(), [record1, record2])
  }),

  it("sell record and balance rise", function(){
    store1.sell(record1);
    assert.strictEqual(store1.inventory.length, 0);
    assert.strictEqual(store1.balance, 100);
  })









})