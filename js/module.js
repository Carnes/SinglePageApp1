var Module = (function(){
    var self = {};

    self.loadHtml = function(htmlName, domID){
        var element = $('#'+domID);

        if(element)
        {
            ko.cleanNode(element);
            var d = element.load('htmlFragments/'+htmlName+'.html');
            return d;
        }
        var d = $.Deferred();
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

    return self;
})();