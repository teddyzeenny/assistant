var SimpleCrudEditMixin = Ember.Mixin.create({
  indexRoute: "index",

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

export default SimpleCrudEditMixin;
