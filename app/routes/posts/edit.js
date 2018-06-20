import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.get('store').findRecord('posts', params.post_id);
	}
});
