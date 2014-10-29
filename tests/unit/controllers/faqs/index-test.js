import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:faqs/index', 'FaqsIndexController', {
  // Specify the other units that are required for this test.
  needs: ['controller:faqs']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
