const $ = require('jquery');
const navilist = require('./common/map.navi.js');
let html = '';
for (const prop in navilist) {
    html += '<li class="map__list">'
    html += '<span class="map__title">'+navilist[prop]['name']+'</span>'
    html += '<a href="'+navilist[prop]['url']+'" class="map__link">'
    html += navilist[prop]['url'] + '</a>'

    if(navilist[prop]['author']) {
        html += '<div class="map__author"><span class="label">작성자</span>'
        html += navilist[prop]['author']
        html += '</div>'
    }

    if(navilist[prop]['description']) {
        html += '<div class="map__desc">'
        html += navilist[prop]['description']
        html += '</div>'
    }
    
    html += '</li>'
}

$('.map__lists').append(html);