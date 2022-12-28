import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import './FormPage/FormPage.js';
import './LoginPage/LoginPage.js';
import './signupPage/signupPage.js';

FlowRouter.route('/', {
    name: 'home',
    action() {
      //this.render('loginPage');
      BlazeLayout.render('mainContainer', {main: 'loginPage'})
    }
  });

FlowRouter.route('/form', {
    name: 'form',
    action() {
      //this.render('formPage');
      BlazeLayout.render('mainContainer', {main: 'formPage'})
    }
  });

FlowRouter.route('/login', {
    name: 'login',
    action() {
      //this.render('loginPage');
      BlazeLayout.render('mainContainer', {main: 'loginPage'})
    }
  });

FlowRouter.route('/signup', {
    name: 'signup',
    action() {
      //this.render('loginPage');
      BlazeLayout.render('mainContainer', {main: 'signupPage'})
    }
  });