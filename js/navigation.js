var Navigation = (function(){
    var self = {};
    self.items = ko.observableArray([
        {page:'page1', text:'Example page 1'},
        {page:'page2', text:'Another page'},
        {page:'page3', text:'A final page'}
    ]);

    self.navTo = function(item){
        Module.loadHtml(item.page, 'main');
    };

    return self;
})();