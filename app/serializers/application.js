import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		let json = this._super(...arguments);

		if (payload.posts) {
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
		} else if (payload.post) {
			json.data = { 
				attributes: payload.post,
				id: payload.post.id,
				type: 'posts'
			};
			delete json.post
		}

    return json;
	},
	serialize(snapshot, options) {
    let json = this._super(...arguments);
    let final = {
    	post: {
	    	key: json.data.attributes.key,
				title: json.data.attributes.title,
				content: json.data.attributes.content,
				attachment: json.data.attributes.attachment
			}
    };

    return final;
  }
});
