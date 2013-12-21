import SimpleCrudNewMixin from 'appkit/routes/mixins/simple_crud_new';

export default Ember.Route.extend(SimpleCrudNewMixin, {
  indexRoute: "publisher_groups",
  mainModel: "publisherGroup"
});
