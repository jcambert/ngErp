var events = require('events');
var fs = require('fs');

var erp = {};
erp = new events.EventEmitter();

erp.load = function load() {

    // require all Erp dependencies
    erp.user = require('./user/index.js');
    erp.useractivity = require('./useractivity/index.js');
    erp.response = require('./response/index.js');
    erp.client = require('./client/index.js');
    erp.dp = require('./dp/index.js');
    erp.locale = require('./locale/index.js');
    
    // get Erp version number
    try {
        var json = JSON.parse(fs.readFileSync('package.json'));
        erp.version = json.version;
        sails.log.info('Erp version : ' + erp.version);
    } catch (e) {
        sails.log.warn('Cannot parse package.json');
    }
    
    // init tasks
    //erp.task.init();
    
    // Erp modules contains all public methods of hooks
    erp.modules = sails.hooks;
    
    // Erp is ready
    erp.emit('ready');
};

if (!String.prototype.format) {
    String.prototype.format = function() {
        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0],
            args = (("string" == args || "number" == args) ? arguments : arguments[0]);
        for (arg in args)
            str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), args[arg]);
        return str;
    }
}

module.exports = erp;