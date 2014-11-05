import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  source: DS.attr('string'),
  country: DS.attr('string'),
  specific_location: DS.attr('string'),
  title: DS.attr('string'),
  project_number: DS.attr('string'),
  industry: DS.attr('string'),
  project_size: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr('string'),
  publish_date: DS.attr('string'),
  end_date: DS.attr('string'),
  funding_source: DS.attr('string'),
  borrowing_entity: DS.attr('string'),
  procurement_organization: DS.attr('string'),
  contact: DS.attr('string'),
  comments: DS.attr('string'),
  submitting_officer: DS.attr('string'),
  submitting_officer_contact: DS.attr('string'),
  url: DS.attr('string'),
  status: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('title');
  }.property('title')
});