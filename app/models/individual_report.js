var IndividualReport = DS.Model.extend({
  hours: DS.attr('number'),
  magazines: DS.attr('number'),
  monthlyReport: DS.belongsTo('monthlyReport'),
  publisher: DS.belongsTo('publisher')
});

export default IndividualReport;
