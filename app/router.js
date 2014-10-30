import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ExplorerENV.locationType
});

Router.map(function() {
  this.resource('consolidated-screening-list-entries', function(){});
  this.resource('trade-events', function(){});
  this.resource('faqs', function(){});
  this.resource('tariff-rates', function(){});
});

export default Router;
