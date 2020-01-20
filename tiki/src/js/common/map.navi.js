const filelist = require('../data/filemap.json');
const navilist = () => {
    let obj = {
        'main' : {
            'name' : '메인',
            'author': 'smlee',
            'description' : 'html로 작성할수 있어요<br>히스토리 작성해주세요.'
        },
        'login' : {
            'name' : '로그인',
        },
        'lanking' : {
            'name' : '랭킹'
        },
        'detail' : {
            'name' : '상세'
        },
    } 
    for (const prop in obj) {
        filelist.forEach( (value) => {
            let getName = String(value).substring(String(value).lastIndexOf('/') + 1, String(value).lastIndexOf('.'))
            if(getName == prop) {
                obj[prop]['url'] = value;
            }
        });
    }

    return obj;
}
module.exports = navilist();