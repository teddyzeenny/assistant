var MonthylReportsMixin = Ember.Mixin.create({
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  years: function() {
    var currentYear = new Date().getFullYear();
    return [currentYear - 1, currentYear, currentYear + 1]
  }.property()
});

export default MonthylReportsMixin;
