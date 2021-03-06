define(function(require) {
	var Backbone = require('Backbone');
	var ViewManager = require('./ViewManager');

	var Router = Backbone.Router.extend({
		initialize: function () {
			this.viewManager = new ViewManager();
		},

		routes: {
			'': 'home',
			'dashboard': 'dashboard',
			'blog': 'blog'
		},

		home: function () {
			require('./../apps/home/app').run(this.viewManager);
		},

		dashboard: function () {
			require('./../apps/dashboard/app').run(this.viewManager);
		},

		blog: function () {
			require('./../apps/blog/app').run(this.viewManager);
		}
	});

	return Router;
});