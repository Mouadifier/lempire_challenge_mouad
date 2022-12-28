import './signupPage.html';
import './signupPage.css';

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.signupPage.onCreated(function () {
  this.alert = new ReactiveVar();

  this.alert.set(null);
});

Template.signupPage.events({
    'submit .form-signup'(event) {
        event.preventDefault();
  
        const target = event.target;
  
        const email = trimInput(target.email.value);
        const username = trimInput(target.username.value);
        const password1 = trimInput(target.password1.value);
        const password2 = trimInput(target.password2.value);

        if(isNotEmpty(email, "email") &&
        isNotEmpty(username, "username") &&
        isNotEmpty(password1, "password") &&
        isNotEmpty(password2, "confirm password") &&
        areValidPasswords(password1, password2)
        ){
          Accounts.createUser({
            username: username,
            email: email,
            password: password1,
          })
          FlowRouter.go("/form");
        }
  
        //Meteor.loginWithPassword(username, password1);

        return false;
    },
    'submit .form-logout'(event) {
        Meteor.logout();
    }
  });


Template.signupPage.helpers({
    isUserLogged() {
      return isUserLogged();
    },
    message(){
      const instance = Template.instance();
      return instance.alert.get();
    },
    alert_visibility(){
      const isAlerttriggered = Template.instance().alert.get()!==null;

      return isAlerttriggered?"visible":"hidden";
    }
  });

var trimInput = function(val){
    return val.replace(/^s*|\s*$/g, "");
}

var isNotEmpty = function(val, checkedVariable){
    if (val && val !==''){
        return true;
    }
    Template.instance().alert.set(checkedVariable + " is empty!");
    return false;
}

var isValidPassword = function(password){
  if(password.length < 6){
    Template.instance().alert.set("password must at least 6 characters long");
    return false;
  }
  return true;
}

var areValidPasswords = function(password, confirm){
  if (!isValidPassword(password)){
      return false;
  }

  if(password !== confirm){
    Template.instance().alert.set("passwords do not match");
    return false;
  }
  
  return true;
}