var Modules = Modules || {};

var Module = function(data){
    var self = this;
    data = data || {};
    var name = data.name || 'unknown';

    self.scripts = [];
    self.htmlFragments = [];
    self.successCallback = typeof(data.successCallback)=="function" ? data.successCallback : function(){};
    self.failCallback = typeof(data.failCallback)=="function" ? data.failCallback : function(){console.log(name+' failed to load.')};

    if(Array.isArray(data.scripts))
        data.scripts.forEach(function(s){
            if(typeof(s)=="string")
                self.scripts.push(s);
        });
    if(Array.isArray(data.htmlFragments))
        data.htmlFragments.forEach(function(h){
            if(typeof(h.htmlName)=="string" && typeof(h.domID)=="string")
                self.htmlFragments.push(h);
        });
};

var ModuleManager = (function(){
    var self = {};

    self.loadHtml = function(htmlName, domID){
        var element = $('#'+domID);
        var d = $.Deferred();
        if(element)
        {
            ko.cleanNode(element);
            $.get('htmlFragments/'+htmlName+'.html', function( data ) {
                $( element ).html( data );
                d.resolve();
            });
            return d;
        }
        d.reject();
        return d;
    };

    self.loadScript = function(scriptName) {
        return $.ajax({
            crossDomain: true,
            url: 'js/'+scriptName+'.js',
            dataType: 'script',
            cache: true
        });
    };

    self.load = function(moduleName){
        var module = Modules[moduleName];
        if(!(module instanceof Module)) return;
        var d = [];
        module.htmlFragments.forEach(function(h) {
            d.push(self.loadHtml(h.htmlName, h.domID));
        });
        module.scripts.forEach(function(s){
            d.push(self.loadScript(s));
        });
        $.when.apply($, d)
            .done(module.successCallback)
            .fail(module.failCallback);
    };

    return self;
})();