Router.configure({
layoutTemplate: 'client'
});

Router.route('/', function () {
	this.render('videoPlayer');
  },{name: 'videoPlayer'});

Router.route('/signup', function () {
	this.render('signup');
  },{name: 'signup'});
