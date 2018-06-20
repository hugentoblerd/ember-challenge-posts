import Controller from '@ember/controller';

let fileUri;

export default Controller.extend({
	actions: {
		uploadFile: function() {
			const file = document.getElementById('file').files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function (res) {
				fileUri = reader.result;
			};
			reader.onerror = function (error) {
				console.log('Error: ', error);
			};
		},
		editPost(post) {
			let id = post.id;
			let title = post.title;
			let content = post.content;
			let attachment = post.attachment;
			let final = {}

			if (attachment === '' || attachment === undefined) {
				attachment = null;
			} else {
				const file = document.getElementById('file').files[0];
				const size = file.size;

				if (size > 50000) {
					attachment = post.attachment;
					this.set('attachment', null);
					return alert('File size greater than 50kb aren\'t allowed');
				} else {
					attachment = fileUri;
				}
			}

			final.post = {
				'id': id,
				'title': title,
				'content': content,
				'attachment': attachment
			}

			this.get('store').adapterFor('posts.edit')
				.updateRecord(this.get('store'), 'posts', post, final)
				.then((res) => {
					this.get('store').query('posts', {key: 'david.hugentobler'});
					this.transitionToRoute('posts');
				}, (err) => {
					console.log(err);
				}
			);
		}
	}
});
