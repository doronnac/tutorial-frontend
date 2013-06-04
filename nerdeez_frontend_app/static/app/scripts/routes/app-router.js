
/**
* our state machine
*/
Nerdeez.Router.map(function(match) {
    this.route('index', {path: '/'});
    this.route('home', {path: '/home'});
    this.route('searchuniversity', {path: '/search-university'});
});

/**
* all nerdeez routes will extend this object
* it will contain common route functions
*/
Nerdeez.NerdeezRoute = Ember.Route.extend({

    /**
* will extract the url params
* @param name String the name of the param to extract
*/
    getURLParameter: function(name){
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.href)||[,null])[1]
        );
    },
    
    /**
* will grab the get params from the url and return a dictionary with the data
* @returns {Object} dictionary object from the url
*/
    getUrlParamsAsDisctionary: function(){
     var search = location.search.substring(1);
     return JSON.parse('{"' + decodeURI(search.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    },
    
    /**
* render common things to all the routes
*/
     renderTemplate: function(){
         this._super();
         this.render('header', {outlet: 'header', into: 'application'});
         /**
* footer is in base.html for now
* this.render('footer', {outlet: 'footer', into: 'application'});
*/
     }
});

Nerdeez.IndexRoute = Nerdeez.NerdeezRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('home', {outlet: 'home', into: 'application'});
	}
});

Nerdeez.HomeRoute = Nerdeez.NerdeezRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('home', {outlet: 'home', into: 'application'});
	}
});

Nerdeez.SearchuniversityRoute = Nerdeez.NerdeezRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('searchuniversity', {outlet: 'searchuniversity', into: 'application'});
	},
	model: function(param){
		return Nerdeez.University.find();
	}
});