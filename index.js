(function(console, require) {
  "use strict";
  var
    util    = require('util'),
    printer = require('printer');
  // console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));
  printer.printDirect({
    type: 'RAW',
    data:"print from Node.JS buffer",
    success: function(jobID) {
      console.log("sent to printer with ID: " + jobID);
    },
    error: function(err) {
      console.log(err);
    }
  });
}(console, require));
