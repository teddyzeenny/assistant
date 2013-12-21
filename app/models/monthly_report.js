var MonthlyReport = DS.Model.extend({
  month: DS.attr('string'),
  year: DS.attr('number'),

  individualReports: DS.hasMany('individualReport')
});

export default MonthlyReport;
