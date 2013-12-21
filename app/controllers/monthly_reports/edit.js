import MonthlyReportsMixin from 'appkit/controllers/mixins/monthly_reports';

export default Ember.ObjectController.extend(MonthlyReportsMixin, {
  isEdit: true,

  totalHours: function(){
    var total = 0;
    this.get('individualReports').forEach(function(report){
      var hours = report.get('hours');
      if (typeof hours !== "undefined" && hours !== null ) {
        total = total + parseInt(hours);
      }
    });
    return total;
  }.property('individualReports.@each.hours'),

  totalMagazines: function() {
    var total = 0;
    this.get('individualReports').forEach(function(report){
      var magazines = report.get('magazines');
      if (typeof magazines !== "undefined" && magazines !== null ) {
        total = total + parseInt(magazines);
      }
    });
    return total;
  }.property('individualReports.@each.magazines')
});
