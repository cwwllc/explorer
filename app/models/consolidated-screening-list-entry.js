import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  source: DS.attr('string'),
  entity_number: DS.attr('string'),
  sdn_type: DS.attr('string'),
  programs: DS.attr('string'),
  title: DS.attr('string'),
  federal_register_notice: DS.attr('string'),
  start_date: DS.attr('string'),
  end_date: DS.attr('string'),
  standard_order: DS.attr('string'),
  license_requirement: DS.attr('string'),
  license_policy: DS.attr('string'),
  call_sign: DS.attr('string'),
  vessel_type: DS.attr('string'),
  gross_tonnage: DS.attr('string'),
  gross_registered_tonnage: DS.attr('string'),
  vessel_flag: DS.attr('string'),
  vessel_owner: DS.attr('string'),
  remarks: DS.attr('string'),
  source_list_url: DS.attr('string'),

  alt_names: DS.attr('string'),
  nationalities: DS.attr('string'),
  citizenships: DS.attr('string'),
  dates_of_birth: DS.attr('string'),
  places_of_birth: DS.attr('string'),

  addresses: DS.hasMany('address'),
  ids: DS.hasMany('id')
});
