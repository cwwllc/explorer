import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:application', 'ApplicationAdapter');

test('it exists', function() {
  var adapter = this.subject();
  ok(adapter);
});

test('pathForType', function() {
  var adapter = this.subject();
  equal(adapter.pathForType('FooBarEntry'), 'foo_bar/search');
});
