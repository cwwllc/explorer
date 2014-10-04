import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:consolidated-screening-list-entries/index', 'ConsolidatedScreeningListEntriesIndexController', {
  needs: ['controller:consolidated-screening-list-entries']
});

test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('page-related properties.', function() {
  var controller = this.subject();
  var entriesController = controller.get('controllers.consolidated-screening-list-entries');

  entriesController.set('page', 1);
  controller.set('total', 25);

  equal(controller.get('prevPage'), null);
  equal(controller.get('nextPage'), 2);
  equal(controller.get('lastPage'), 3);
  deepEqual(controller.get('pagesInfo'), [
      {page: 1, isCurrent: true,  text: 1},
      {page: 2, isCurrent: false, text: 2},
      {page: 3, isCurrent: false, text: 3}
    ]);

  entriesController.set('page', 2);
  controller.set('total', 24);

  equal(controller.get('prevPage'), 1);
  equal(controller.get('nextPage'), 3);
  equal(controller.get('lastPage'), 3);
  deepEqual(controller.get('pagesInfo'), [
      {page: 1, isCurrent: false, text: 1},
      {page: 2, isCurrent: true,  text: 2},
      {page: 3, isCurrent: false, text: 3}
    ]);

  entriesController.set('page', 4);
  controller.set('total', 40);

  equal(controller.get('prevPage'), 3);
  equal(controller.get('nextPage'), null);
  equal(controller.get('lastPage'), 4);
  deepEqual(controller.get('pagesInfo'), [
      {page: 1, isCurrent: false, text: 1},
      {page: 2, isCurrent: false, text: 2},
      {page: 3, isCurrent: false, text: 3},
      {page: 4, isCurrent: true,  text: 4}
    ]);
});
