Router.route('/home', function() {
    this.render("home");
  });
  
  Router.route('/', function() {
    this.render("home");
  });
  
  Router.route('/account', function() {
    this.render("account");
  });
  
  Router.route('/calendar', function() {
    this.render("calendar");
  });