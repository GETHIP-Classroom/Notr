Meteor.loginWithPassword = function (selector, password, callback) {
    if (typeof selector === 'string')
      if (selector.indexOf('@') === -1)
        selector = {username: selector};