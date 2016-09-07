var events = require('events');
var fs = require('fs');

var erp = {};
erp = new events.EventEmitter();

erp.load = function load() {

    // require all Erp dependencies
    erp.user = require('./user/index.js');
    erp.useractivity = require('./useractivity/index.js');
    erp.response = require('./response/index.js');
    
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

module.exports = erp;