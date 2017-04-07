var fs = require('fs');
var Parser = require("jison").Parser;

var diagram = require("./src/diagram");
var bnf = fs.readFileSync(__dirname + '/src/es-dsl.jison', 'utf8');

var esDsl = {
  parse: function (input) {
    var parser = new Parser(bnf);
    parser.yy = diagram.Diagram;

    parser.yy.currentDomain = [];
    parser.yy.data = [];

    var result = parser.parse(input);
    console.log(result.data);
    console.log(JSON.stringify(result.aggregate));
    return result;
  }
};

var fs = require('fs');
var path = require('path');
var raw = fs.readFileSync(__dirname + '/demo/phodal.ddd', 'utf8');

esDsl.parse(raw);

