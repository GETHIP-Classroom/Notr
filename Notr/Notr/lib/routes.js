Router.route('/home', function() {
    this.render("home");
  });
  
  Router.route('/', function() {
    this.render("home");
  });
  
  Router.route('/account', function() {
    this.render("account");
  });
  Router.route('/groups', function() {
    this.render("groups");
  });
  Router.route('/individualGroup', function() {
    this.render("individualGroup");
  });
  Router.route('/about', function() {
    this.render("about");
  });

  Router.route('/calendar', function() {
    this.render("scheduler");
  });
 
  Router.route('/add', function() {
    this.render("add-group");
  });