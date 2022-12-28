import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '/imports/api/exportsMethods';
import '/imports/api/exportsPublications';
 
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

const TEST_USERNAME = 'test';


Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
          username: SEED_USERNAME,
          password: SEED_PASSWORD,
        });

        Accounts.createUser({
          username: TEST_USERNAME,
          password: SEED_PASSWORD,
        });
      }
});