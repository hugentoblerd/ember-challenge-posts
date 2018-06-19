import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
	headers: computed(function() {
 		return {
			'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
 		};
 	}),
	host: 'http://167.99.111.228:4000'
});
