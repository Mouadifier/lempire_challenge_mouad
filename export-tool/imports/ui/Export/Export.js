import { Template } from 'meteor/templating'
import './Export.html';

Template.export.helpers({
    isFinished: function(progress){
        return progress == 100;
    }
  })