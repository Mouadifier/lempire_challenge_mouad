import './FormPage.html';
import './FormPage.css';
import './Form/Form.js';

import { Template } from 'meteor/templating';
import { ExportsCollection } from '../../db/ExportsCollection';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

const IS_LOADING_STRING = "isLoading";

Template.formPage.onCreated(function mainContainerOnCreated() {
    this.state = new ReactiveDict();
  
    const handler = Meteor.subscribe('exports');
    Tracker.autorun(() => {
      this.state.set(IS_LOADING_STRING, !handler.ready());
    });
  });


Template.formPage.helpers({
    exports() {
      return ExportsCollection.find({}, { sort: { createdAt: -1 } });
    },
    isLoading() {
      const instance = Template.instance();
      return instance.state.get(IS_LOADING_STRING);
    },
    isUserLogged() {
      return isUserLogged();
    }
  });

