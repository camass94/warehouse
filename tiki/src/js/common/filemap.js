const filemap = require('../data/filemap.json');
const filelist = () => {
    let obj = {
        'index' : [
            {'intro' : {
                'name': '스플래쉬', //화면명 (필수)
                'author': 'smlee', //작업자
                'description': 'smlee', //설명이나 히스토리(html로 작성 가능)
            }},
            {'login' : {
                'name': '로그인',
            }},
            {'appinfo' : {
                'name': 'App정보',
            }},
        ],
        'game' : [
            {'main' : {
                'name': '게임',
            }},
            {'list' : {
                'name': '리스트',
            }},
            {'detail' : {
                'name': '상세',
            }},
            {'data' : {
                'name': '데이터',
            }},
        ],
        'club' : [
            {'main' : {
                'name': '클럽',
            }},
            {'list' : {
                'name': '리스트',
            }},
            {'detail' : {
                'name': '상세',
            }},
        ],
        'field' : [
            {'main' : {
                'name': '구장',
            }},
            {'list' : {
                'name': '리스트',
            }},
            {'detail' : {
                'name': '상세',
            }},
        ],
        'mypage' : [
            {'main' : {
                'name': '이용자홈',
            }},
        ]
    }

    /* for (const prop in obj) {
        console.log('prop', prop, obj)
        filemap.forEach( (value) => {
            let getName = String(value).substring(String(value).lastIndexOf('/') + 1, String(value).lastIndexOf('.'))
            if(getName == prop) {
                console.log(value, prop, '<==')
                // obj[prop]['url'] = value;
            }
        });
    } */

    return obj;
}
module.exports = filelist();