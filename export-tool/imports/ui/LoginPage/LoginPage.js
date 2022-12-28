import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './LoginPage.html';
import './LoginPage.css';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.loginPage.events({
    'submit .form-login'(event) {
        event.preventDefault();
  
        const target = event.target;
  
        const username = target.username.value;
        const password = target.password.value;
  
        Meteor.loginWithPassword(username, password);
        FlowRouter.go("/form");
    },
    'submit .form-logout'(event) {
        Meteor.logout();
    }
  });

  Template.loginPage.helpers({
    isUserLogged() {
      return isUserLogged();
    }
  });