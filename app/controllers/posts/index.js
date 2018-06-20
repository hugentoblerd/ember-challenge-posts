import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		openFile(base64URL){
	    window.open().document.write(`<iframe src="${base64URL}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
		},
		editPost(post) {
			let id = post.id;
			
			this.transitionToRoute('posts.edit', id, {
			  queryParams: { 'id': id }
			});
		},
		deletePost(post) {
      let id = post.id;
      
      if (confirm("You sure you want to delete this post?")) {
      	this.get('store').findRecord('posts', id, { backgroundReload: false }).then((res) => {
	      	res.destroyRecord();
	      });
      };
    }
	}
});
