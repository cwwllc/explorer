import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('serializer:application', 'ApplicationSerializer');


test('default factory instance is valid', function() {
  var serializer = this.subject();
  ok(serializer);
});


test('extractArray', function() {
  var serializer = this.subject();

  var payload = {
    total: 10,
    offset: 0,
    results: [{name: 'Foo'}, {name: 'Bar'}]
  };
  var expected = [
    {id: 'undefinedFooundefinedundefinedundefined', name: 'Foo'},
    {id: 'undefinedBarundefinedundefinedundefined', name: 'Bar'}];

  var extracted = serializer.extractArray({}, 'N/A', payload);
  deepEqual(extracted, expected);
});


test('extractSingle: name and alt_names', function() {
  var serializer = this.subject();

  var payload = {
    name: 'Foobius Barius',
    alt_names: ['Fubar', 'Foo to the Bar']};

  var expected = {
    name: "Foobius Barius",
    alt_names: "Fubar, Foo to the Bar",
    id: "undefinedFoobius Bariusundefinedundefinedundefined"};

  var extracted = serializer.extractSingle({}, 'N/A', payload);
  deepEqual(extracted, expected);
});


test('extractSingle: name and addresses', function() {
  var serializer = this.subject();

  var pushedToStore = [];
  var storeMock = Ember.Object.extend({
    push: function(modelType, item){ pushedToStore.push(item); }
  }).create();

  var payload = {
    name: 'Foobius Barius',
    addresses: [{
      address: "123 High Street",
      city: "Springfield",
      state: "ZZ",
      postal_code: "12345",
      country: "US" },
    { address: "987 Low Street",
      city: "Summerplane",
      state: "ZZ",
      postal_code: "98765",
      country: "US" }]};

  var extracted = serializer.extractSingle(storeMock, 'N/A', payload);

  var expectedExtractSingle = {
    addresses: ["123 High StreetSpringfieldZZ12345US", "987 Low StreetSummerplaneZZ98765US"],
    id: "undefinedFoobius Bariusundefinedundefinedundefined",
    name: "Foobius Barius" };

  var expectedPushedToStore = [{
    address: "123 High Street",
    city: "Springfield",
    country: "US",
    id: "123 High StreetSpringfieldZZ12345US",
    postal_code: "12345",
    state: "ZZ" }, {
    address: "987 Low Street",
    city: "Summerplane",
    country: "US",
    id: "987 Low StreetSummerplaneZZ98765US",
    postal_code: "98765",
    state: "ZZ" }];

  deepEqual(extracted, expectedExtractSingle);
  deepEqual(pushedToStore, expectedPushedToStore);
});
