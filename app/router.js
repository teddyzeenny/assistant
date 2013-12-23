var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('publishers',  { path: '/' }, function() {
    this.route('new');
    this.route('edit', { path: "edit/:publisher_id" });
  });
  this.resource('publisher_groups', function() {
    this.route('new');
    this.route('edit', { path: "edit/:publisherGroup_id" });
  });
  this.resource('monthly_reports', function() {
    this.route('new');
    this.route('edit', { path: "edit/:monthlyReport_id" });
  });
});

export default Router;
