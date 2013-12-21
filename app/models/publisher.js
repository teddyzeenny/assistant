var Publisher = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  telephoneNumber: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  isPioneer: DS.attr('boolean'),

  publisherGroup: DS.belongsTo('publisherGroup')
});

export default Publisher;
