import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ExplorerENV.locationType
});

Router.map(function() {
  this.route('consolidated-screening-list-entries');
});

export default Router;