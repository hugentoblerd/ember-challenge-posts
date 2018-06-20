import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	attachment: DS.attr(),
	key: DS.attr('string'),
	created_at: DS.attr(),
	updated_at: DS.attr(),
	deleted_at: DS.attr()
});
