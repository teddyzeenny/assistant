var SimpleCrudIndexMixin = Ember.Mixin.create({
  mainModel: "",

  model: function() {
    return this.store.find(this.get("mainModel"));
  },

  actions: {
    remove: function (model) {
      model.deleteRecord();
      model.save();
    }
  }
});

export default SimpleCrudIndexMixin;
