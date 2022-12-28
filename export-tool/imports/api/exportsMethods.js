import { check } from 'meteor/check';
import { ExportsCollection } from '../db/ExportsCollection';
import { Jobs } from 'meteor/wildhart:jobs'
import '../jobs/exportJob'

target_urls = [
    "https://www.lempire.com/",
    "https://www.lemlist.com/",
    "https://www.lemverse.com/",
    "https://www.lemstash.com/"
];


Meteor.methods({
  'export.insert'(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    export_document = {
        text,
        progress: 0,
        userId: this.userId,
        createdAt: new Date
      }

    id = ExportsCollection.insert(export_document);
    Jobs.run("runExport", id, {
        in: {
            second: 1
        }
    });
  },
})