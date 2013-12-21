import SimpleCrudIndexMixin from 'appkit/routes/mixins/simple_crud_index';

export default Ember.Route.extend(SimpleCrudIndexMixin, {
  mainModel: "publisherGroup"
});
