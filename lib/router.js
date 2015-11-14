Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    trackPageView: true
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/room/:_id', {
    name: 'room',
    template: 'room'
});