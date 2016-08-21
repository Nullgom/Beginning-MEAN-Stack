// 모듈을 불러옵니다.
var url = require('url');
var qryString = require('querystring');

var parsedObj = url.parse('http://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=node.js');
console.log(qryString.parse(parsedObj.query));
console.log(parsedObj.query);