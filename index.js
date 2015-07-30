#!/usr/bin/env node
/* eslint quotes: [0], strict: [0] */
"use strict";

var _require = require("zaccaria-cli");

var $d = _require.$d;
var $o = _require.$o;
var $f = _require.$f;
var $b = _require.$b;

var $c = $b.promisify(require("copy-paste").copy);

var getOptions = function (doc) {
    "use strict";
    var o = $d(doc);
    var help = $o("-h", "--help", false, o);
    var vname = o.VARNAME;
    var sname = $o("-s", "--structure", null, o);
    var num = $o("-n", "--number", "0", o);
    var it = $o("-i", "--iterator", "i", o);
    var max = $o("-m", "--max", "?", o);
    return {
        help: help, vname: vname, sname: sname, num: num, it: it, max: max
    };
};

var template = function (d) {
    return "\n\tdigraph g {\n\n    graph [\n        rankdir = \"LR\"\n    ];\n\n\tsubgraph cluster_" + d.num + "0 {\n        label = \"" + d.vname + "\";\n        fontname = \"Roboto Condensed Regular\"\n        \"node" + d.num + "00\" [\n            label = \"[0]|...| <ty" + d.num + "> [" + d.it + "] |...| [" + d.max + "]\"\n            shape = \"record\"\n            fontname = \"Roboto Condensed Regular\"\n         ];\n         \"node" + d.num + "01\" [\n            label=\"Array di '" + d.sname + "'\"\n            shape=plaintext\n            fontname=\"Roboto Condensed Bold\"\n         ]\n    }\n\n\tsubgraph cluster_" + d.num + "1 {\n        label = \"" + d.vname + "[" + d.it + "]\";\n        fontname = \"Roboto Condensed Regular\"\n        \"node" + d.num + "10\" [\n            label = \"f1 | f2 | f3\"\n            shape = \"record\"\n                        fontname = \"Roboto Condensed Regular\"\n            ];\n\n        \"node" + d.num + "11\" [\n            label=\"struct '" + d.sname + "'\"\n            shape=plaintext\n            fontname=\"Roboto Condensed Bold\"\n        ]\n    }\n\n\tnode" + d.num + "00:ty" + d.num + " -> node" + d.num + "10:nw\n}\n\t";
};

var main = function () {
    $f.readLocal("docs/usage.md").then(function (it) {
        var o = getOptions(it);
        if (o.help) {
            console.log(it);
        } else {
            $c(template(o)).then(function () {
                console.log("Copied");
            });
        }
    });
};

main();
