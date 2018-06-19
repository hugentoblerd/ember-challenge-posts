import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		let json = this._super(...arguments);

		json.data = payload.posts;
		json.data.forEach((obj) => {
			obj.type = 'posts';
			obj.attributes = {
	      title: obj['title'],
	      content: obj['content'],
				attachment: obj['attachment'],
				key: obj['key'],
				created_at: obj['created_at'],
				updated_at: obj['updated_at'],
				deleted_at: obj['deleted_at']
	    };

	    delete obj['title'];
	    delete obj['content'];
			delete obj['attachment'];
			delete obj['key'];
			delete obj['created_at'];
			delete obj['updated_at'];
			delete obj['deleted_at'];
		})
		delete json.posts

    return json;
	}
});
