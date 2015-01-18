import DS from 'ember-data';

export default DS.Model.extend({
  pdf_title: DS.attr('string'),
  pdf_chapter: DS.attr('string'),
  pdf_section: DS.attr('string'),
  section_title: DS.attr('string'),
  content: DS.attr('string'),
  section_url: DS.attr('string'),


  searchResultHeader: function() {
    return this.get('pdf_section');
  }.property('pdf_section')
});
