import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			posts: [
				{
					id: "fee81100-f7bd-11e6-848c-adc362169f09",
					title: "Some Other Post",
					content: "Some Other Post Content",
					attachment: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/",
					key: "{{yourkey}}",
					created_at: "2018-02-20T22:43:27.000Z",
					updated_at: "2018-02-20T22:43:27.000Z",
					deleted_at: null
				}, {
					id: "48cddf30-f7bd-11e6-88c5-571a62d76275",
					title: "My New Post",
					content: "Here’s a post",
					attachment: null,
					key: "{{yourkey}}",
					created_at: "2018-02-20T22:38:22.000Z",
					updated_at: "2018-02-20T22:38:22.000Z",
					deleted_at: null
				}
			]
		}
	}
});
