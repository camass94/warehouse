const { $, tiki } = require('./common.js');

const filemap = tiki.filemap;

for (var prop in filemap) {
    console.log(prop, filemap[prop]);
}