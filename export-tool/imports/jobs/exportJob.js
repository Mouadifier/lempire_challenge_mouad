import { Jobs } from 'meteor/wildhart:jobs'
import { ExportsCollection } from '../db/ExportsCollection';

Jobs.register({
    runExport: function (id_export) {
        var progress = ExportsCollection.findOne({_id: id_export}).progress + 5;
        //console.log(ExportsCollection.find({_id: id_export}, {progress}))
        ExportsCollection.update({_id: id_export}, {$set: {"progress": progress}});

        if(progress<100){
            this.reschedule({in: {second: 1}});
        }else{
            export_url = target_urls[Math.floor(Math.random() * target_urls.length)];
            ExportsCollection.update({_id: id_export}, {$set: {export_url: export_url}});
        }
    }
});