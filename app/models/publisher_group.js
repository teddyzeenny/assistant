var PublisherGroup = DS.Model.extend({
  name: DS.attr('string'),

  publishers: DS.hasMany('publisher')
});

export default PublisherGroup;
