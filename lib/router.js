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

Router.route('/page2', {
    name: 'page2',
    template: 'page2'
});