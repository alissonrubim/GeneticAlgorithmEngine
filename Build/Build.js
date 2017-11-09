var compressor = require('node-minify');
 
compressor.minify({
  compressor: 'no-compress',
  input: ['../Sourcecode/GAEngine.js', '../Sourcecode/GAEngine.Array.js', '../Sourcecode/GAEngine.Random.js', '../Sourcecode/GAEngine.Thread.js'],
  output: '../Output/gaengine.js',
  sync: true,
  callback: function (err, min) {
  	console.info('Concatenation done!')
  }
});


compressor.minify({
  compressor: 'gcc',
  input: ['../Sourcecode/GAEngine.js', '../Sourcecode/GAEngine.Random.js', '../Sourcecode/GAEngine.Thread.js', '../Sourcecode/GAEngine.Array.js'],
  output: '../Output/gaengine.min.js',
  sync: true,
  callback: function (err, min) {
    console.info('Compression done!')
  }
});
