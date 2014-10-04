import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:consolidated-screening-list-entries/index',
  'ConsolidatedScreeningListEntriesIndexRoute');

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

test('offset', function() {
  var route = this.subject();
  equal(route.offset(0), 0);
  equal(route.offset(1), 0);
  equal(route.offset(2), 10);
  equal(route.offset(17), 160);
  equal(route.offset(-17), 0);
  equal(route.offset(null), 0);
  equal(route.offset('asdf'), 0);
});
