import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editPost(post) {
			let id = post.id;
			let title = post.title;
			let content = post.content;
			let attachment = post.attachment;
			let final = {
				'post': {
					'id': id,
					'title': title,
					'content': content,
					'attachment': attachment
				}
			}			

			this.get('store').adapterFor('posts.edit')
				.updateRecord(this.get('store'), 'posts', post, final)
				.then((res) => {
					this.transitionToRoute('posts');
				}, (err) => {
					console.log(err);
				}
			);
		}
	}
});
