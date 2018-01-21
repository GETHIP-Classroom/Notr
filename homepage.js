/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go("index.html");
    }
});

'submit form': function(event){
    event.preventDefault();
    var listName = $('[name=listName]').val();
    var currentUser = Meteor.userId();
    Lists.insert({
        name: listName,
        createdBy: currentUser
    }, function(error, results){
        Router.go('listPage', { _id: results });
    });
    $('[name=listName]').val('');
}

'submit form': function(event){
    event.preventDefault();
    var todoName = $('[name="todoName"]').val();
    var currentUser = Meteor.userId();
    var currentList = this._id;
    Todos.insert({
        name: todoName,
        completed: false,
        createdAt: new Date(),
        createdBy: currentUser,
        listId: currentList
    });
    $('[name="todoName"]').val('');
}

Template.todos.helpers({
    'todo': function(){
        var currentList = this._id;
        var currentUser = Meteor.userId();
        return Todos.find({ listId: currentList, createdBy: currentUser }, {sort: {createdAt: -1}})
    }
});