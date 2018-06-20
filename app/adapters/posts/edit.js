import ApplicationAdapter from '../application';
import { computed } from '@ember/object';

export default ApplicationAdapter.extend({
	updateRecord(store, type, snapshot, data) {
    let id = snapshot.id;
    let url = this.buildURL(type, id, snapshot, 'updateRecord');

    return this.ajax(url, 'PUT', { data: data });
  }
});
