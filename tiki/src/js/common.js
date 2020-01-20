const $ = require('jquery');
const filemap = require('./common/filemap.js');

(function ($) {
    const _tiki = {};
    
    console.log('common');
    _tiki.filemap = filemap;
    if (typeof tiki == 'undefined') {
        window.tiki = {};
	}
	tiki = _tiki;
})('jquery');


module.exports = { $, tiki };