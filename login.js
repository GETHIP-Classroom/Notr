Meteor.loginWithPassword(email, password, function(){
  console.log("You initiated the login process.");
});
Meteor.loginWithPassword(email, password, function(error){
  if(error){
      console.log(error.reason);
  } else {
      Router.go("homepage.html");
  }
});
