Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('tanks'); }
});

Router.route('/', {name: 'tanksList'});

Router.route('/tanks/:_id', {
    name: 'tankPage',
    data: function() { return Tanks.findOne(this.params._id); }
});

Router.route('/tanks/:_id/pump', {
    name: 'tankPump',
    data: function() { return Tanks.findOne(this.params._id); }
});

Router.route('/tanks/:_id/params', {
    name: 'tankParams',
    data: function() { return Tanks.findOne(this.params._id); }
});

Router.route('/submit', {name: 'tankSubmit'});

var requireLogin = function() {
    if (! Meteor.user()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
};

Router.onBeforeAction('dataNotFound', {only: 'tankPage'});
Router.onBeforeAction(requireLogin, {only: 'tankSubmit'});