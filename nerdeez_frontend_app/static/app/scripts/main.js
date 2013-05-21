require.config({
  shim: {
  	//shim taken from http://requirejs.org/docs/api.html#config

  	'bootstrap/bootstrap-affix': {
  		exports: 'bootstrap-affix'
    },
    'bootstrap/bootstrap-alert': {
    	exports: 'bootstrap-alert'	
    },
    'bootstrap/bootstrap-dropdown': {
    	exports: 'bootstrap-dropdown'	
    },
    'bootstrap/bootstrap-tooltip': {
    	exports: 'bootstrap-tooltip'	
    },
    'bootstrap/bootstrap-modal': {
    	exports: 'bootstrap-modal'	
    },
    'bootstrap/bootstrap-transition': {
    	exports: 'bootstrap-transition'	
    },
    'bootstrap/bootstrap-button': {
    	exports: 'bootstrap-button'	
    },
    'bootstrap/bootstrap-popover': {
    	exports: 'bootstrap-popover'	
    },
    'bootstrap/bootstrap-typeahead': {
    	exports: 'bootstrap-typeahead'	
    },
    'bootstrap/bootstrap-carousel': {
    	exports: 'bootstrap-carousel'	
    },
    'bootstrap/bootstrap-scrollspy': {
    	exports: 'bootstrap-scrollspy'	
    },
    'bootstrap/bootstrap-collapse': {
    	exports: 'bootstrap-collapse'	
    },
    'bootstrap/bootstrap-tab': {
    	exports: 'bootstrap-tab'	
    },
},

//Then, later in a separate file, call it 'MyModel.js', a module is
//defined, specifying 'backbone' as a dependency. RequireJS will use
//the shim config to properly load 'backbone' and give a local
//reference to this module. The global Backbone will still exist on
//the page too.
/*define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({});
});
  },
*/
  paths: {
    jquery: 'vendor/jquery.min',
    bootstrap: 'vendor/bootstrap',
  }
});
 
require(['app'], function(app) {
  // use app here
  console.log(app);
});

/**
* init the application
*/
var WorkerimClient = Ember.Application.create({
    server_url: 'https://workerim-server-dev.herokuapp.com',
    rootElement: '#wrap'
});

WorkerimClient.set('ready', readyFunction);