import SimpleCrudEditMixin from 'appkit/routes/mixins/simple_crud_edit';

export default Ember.Route.extend(SimpleCrudEditMixin, {
  indexRoute: "monthly_reports",

  setupController: function(controller, model) {

    var individualReports,
        store = this.store,
        report;

    // create individual report if individual report not found in
    // model's individual reports

    // bug: ember can't seem to fetch hasMany relationships properly
    this.store.find('individualReport').then(function(records){
      individualReports = records.filterBy('monthlyReport.id', model.get('id'));
    }).then(function(){
      store.find('publisher').then(function(publishers){
        publishers.forEach(function(publisher){

          report = individualReports.findBy('publisher', publisher);

          if (!report) {
            store.createRecord('individualReport', {
              monthlyReport: model,
              publisher: publisher
            }).save();
          } else {
            model.get('individualReports').pushObject(report);
          }
        });
      });
    });

    this._super(controller, model);
  },

  actions: {
    submit: function() {
      var self = this,
          model = this.get('currentModel');

      model.get('individualReports').forEach(function(report) {
        report.save();
      });

      model.set('individualReports', []).save().then(function(){
        self.transitionTo(self.get("indexRoute"));
      });
    }
  }
});
