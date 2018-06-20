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
		createNewPost() {
			const newTitle = this.get('newTitle');
			const newContent = this.get('newContent');
			let newAttachment = document.getElementById('file').value;

			if (newAttachment === '' || newAttachment === undefined) {
				newAttachment = null;
			} else {
				const file = document.getElementById('file').files[0];
				const size = file.size;

				if (size > 50000) {
					newAttachment = null;
					this.set('newAttachment', null);
					alert('File size greater than 50kb aren\'t allowed');
				} else {
					newAttachment = fileUri;
				}
			}

			console.log(newAttachment);

			let newRecord = this.get('store').createRecord('posts', {
				key: "david.hugentobler",
				title: newTitle,
				content: newContent,
				attachment: newAttachment
			});

			newRecord.save()
				.then((res) => {
					this.transitionToRoute('posts');
				});
		}
	}
});
