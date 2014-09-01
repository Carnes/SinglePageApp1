Modules.Navigation = (function(){
    var self = new Module({
        name: 'navigation',
        scripts: ['navigation'],
        htmlFragments: [{htmlName:'navigation', domID:'navigation'}],
        successCallback: function(){
            ko.applyBindings(Navigation, $('#navigationTemplate').get(0));
            Navigation.navTo(Navigation.items()[0]);
        }
    });
    return self;
})();