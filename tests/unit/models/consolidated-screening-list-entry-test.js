import {
  moduleForModel,
  test
} from 'ember-qunit';

import Address from "explorer/models/address";
import Identification from "explorer/models/identification";

moduleForModel('consolidated-screening-list-entry', 'ConsolidatedScreeningListEntry', {
  // Specify the other units that are required for this test.
  needs: ['model:address', 'model:identification']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
