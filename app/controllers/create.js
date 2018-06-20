import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		createNewPost() {
			let newTitle = this.get('newTitle');
			let newContent = this.get('newContent');
			let newAttachment = this.get('newAttachment');

			if (newAttachment === '' || newAttachment === undefined) {
				newAttachment = null;
			}

      let newRecord = this.get('store').createRecord('posts', {
        key: "david.hugentobler",
				title: newTitle,
				content: newContent,
				attachment: newAttachment
      });

      newRecord.save()
	      .then((res) => {
	      	console.log(res);
	      	this.transitionToRoute('posts');
	      });
		}
	}
});
