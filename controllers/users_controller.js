const connection = require('../common/mysqlConnection');
const request = require('request');
exports.default = function(req, res){
  res.send('respond with a resource');
}

exports.get_id = function(req, res) {	
    connection.query('select name from testTable', function(err, results, fields){
      if(err) throw error;
      res.send(results[0].name);//[0]をつけなかったらundefinedになる
    });
}

exports.get_google_site = function(req, res){
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body) // Print the google web page.
    }
  });
}

exports.get_json = function(req, res){
  const todoList = [
    { title: 'JavaScriptを勉強する', done: true },
    { title: 'Node.jsを勉強する', done: false },
    { title: 'Web APIを作る', done: false }
  ];
  // JSONを送信する
  res.json(todoList);  
}