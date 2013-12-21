var SimpleCrudNewMixin = Ember.Mixin.create({
  indexRoute: "index",
  mainModel: "",

  model: function() {
    return this.store.createRecord(this.get("mainModel"));
  },

  deactivate: function() {
    this.get("currentModel").rollback();
  },

  actions: {
    submit: function() {
      var self = this;
      this.get('currentModel').save().then(function(){
        self.transitionTo(self.get("indexRoute"));
      });
    }
  }
});

export default SimpleCrudNewMixin;
