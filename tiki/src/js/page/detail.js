const $ = require('jquery');

const graphObj = {
    target: '.detail__graph',
    size: { w: 500//$(document).width() - 50
            ,h: 500 //$(document).width() - 50
    },
    svg: '.polygon',
    svghtml : '<svg><polygon class="polygon" fill="#eee" /><polygon class="polygon2" stroke="black" /></svg>',
}

const graph = $(graphObj.target);

graph.append(graphObj.svghtml);
graph.find('svg').css({
    width: graphObj.size.w,
    height: graphObj.size.h
})

const p = [];
const max = [[250, 0, 0], [500, 200, 45], [375, 500, 160], [125, 500, 200], [0, 200, 290]];
const setPoints = graph.attr('data-points');
const getPoints = (points) => {
    const arr = points.split(',');
    const x = graphObj.size.w;
    const y = graphObj.size.w;
    //x1(x/2),y1(z)
    //x2()
    // var a = radius * Math.cos(Math.PI* ((degree * time)-90)/ 180);
    const arrr = [];
    arr.forEach( (z, i) => {
        // a = z*max/100;
        // b = (max/2) * Math.cos(Math.PI* ((45 * 2)-90)/ 180);
        // p.push(z*max/100)
        
    });
    max.forEach( (m, i) => {
        // arrr.push([a,b])
        arr.forEach( (z, j) => {
            var a = (z*m[0]/100), b = (z*m[1]/100);
            var c = (a) * Math.cos(Math.PI* (m[2]-90)/ 180);
            var d = (b) * Math.sin(Math.PI* (m[2]-90)/ 180);
            if(i==j) {
                p.push([a, b])
                console.log(a, b, Math.floor(c), Math.floor(d))
            }
        });
    })
}
getPoints(setPoints);
const points = '250 0, 500 200, 375 500, 125 500, 0 200'
const points2 = p[0][0]+' '+p[0][1]+' ,'+p[1][0]+' '+p[1][1]+', '+p[2][0]+' '+p[2][1]+' ,'+p[3][0]+' '+p[3][1]+', '+p[4][0]+' '+p[4][1]
$(graphObj.svg).attr('points', points)
$(graphObj.svg).next().attr('points', points2)
console.log(p, points2)
