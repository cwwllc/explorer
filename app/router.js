import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ExplorerENV.locationType
});

Router.map(function() {
  this.resource('consolidated-screening-list-entries', function(){});
  this.resource('trade-events', function(){});
  this.resource('ita-faqs', function(){});
  this.resource('tariff-rates', function(){});
  this.resource('trade-leads', function(){});
  this.resource('market-research-library-entries', function(){});
  this.resource('ita-office-locations', function(){});
  this.resource('country-commercial-guides', function(){});
  this.resource('sharepoint-trade-articles', function(){});
});

export default Router;
