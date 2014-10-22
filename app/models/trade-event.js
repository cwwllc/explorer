import DS from 'ember-data';

export default DS.Model.extend({
  event_name: DS.attr('string'),
  source: DS.attr('string'),
  event_type: DS.attr('string'),
  start_date: DS.attr('string'),
  end_date: DS.attr('string'),
  cost: DS.attr('string'),
  cost_currency: DS.attr('string'),
  registration_link: DS.attr('string'),
  registration_title: DS.attr('string'),
  description: DS.attr('string')
});
