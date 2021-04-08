'use strict'
var sass = require('sass');
var fs = require('fs');
var result = sass.render({
  file     : 'tachyons.scss',
  outFile  : 'tachyons-custom.css',
  sourceMap: 'tachyons-custom.css.map'  
}, function(error, result) { // node-style callback from v3.0.0 onwards
  if(!error){
    // No errors during the compilation, write this result on the disk
    fs.writeFile('tachyons-custom.css', result.css, function(err){
      if(!err){
        console.log('done writing');
      }
    });
  }
});
