import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  answer: DS.attr('string'),

  update_date: DS.attr('string'),

  topic: DS.attr('string'),
  industry: DS.attr('string'),
  country: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('question');
  }.property('question')
});
