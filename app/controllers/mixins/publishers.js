var PublishersMixin = Ember.Mixin.create({
  init: function() {
    var self = this;
    this.store.find("publisherGroup").then(function(records){
      self.set("groups", records);
    });
    this._super();
  },

  groups: []
});

export default PublishersMixin;
