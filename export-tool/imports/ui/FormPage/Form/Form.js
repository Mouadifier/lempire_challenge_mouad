import { Template } from 'meteor/templating'
import './Form.html';

Template.form.events({
    "submit .export-form"(event) {
      event.preventDefault();
  
      const target = event.target;
      const text = target.exportName.value;
  
      Meteor.call('export.insert', text);
  
      target.text.value = '';
    }
  });