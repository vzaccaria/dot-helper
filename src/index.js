/* eslint quotes: [0], strict: [0] */
var {
    $d, $o, $f, $b
} = require('zaccaria-cli')

var $c = $b.promisify(require('copy-paste').copy)

var getOptions = doc => {
    "use strict"
    var o = $d(doc)
    var help	= $o('-h', '--help', false, o)
	var vname	= o.VARNAME
	var sname	= $o('-s', '--structure', null, o)
	var num		= $o('-n', '--number', '0', o)
	var it		= $o('-i', '--iterator', 'i', o)
	var max		= $o('-m', '--max', '?', o)
    return {
        help, vname, sname, num, it, max
    }
}

var template = (d) => {
	return `
	digraph g {

    graph [
        rankdir = "LR"
    ];

	subgraph cluster_${d.num}0 {
        label = "${d.vname}";
        fontname = "Roboto Condensed Regular"
        "node${d.num}00" [
            label = "[0]|...| <ty${d.num}> [${d.it}] |...| [${d.max}]"
            shape = "record"
            fontname = "Roboto Condensed Regular"
         ];
         "node${d.num}01" [
            label="Array di '${d.sname}'"
            shape=plaintext
            fontname="Roboto Condensed Bold"
         ]
    }

	subgraph cluster_${d.num}1 {
        label = "${d.vname}[${d.it}]";
        fontname = "Roboto Condensed Regular"
        "node${d.num}10" [
            label = "f1 | f2 | f3"
            shape = "record"
            fontname = "Roboto Condensed Regular"
            ];

        "node${d.num}11" [
            label="struct '${d.sname}'"
            shape=plaintext
            fontname="Roboto Condensed Bold"
        ]
    }

	node${d.num}00:ty${d.num} -> node${d.num}10:nw
}
	`}

var main = () => {
    $f.readLocal('docs/usage.md').then(it => {
        var o = getOptions(it);
        if (o.help) {
            console.log(it)
        } else {
		$c(template(o)).then( () => {
				console.log("Copied");
			})
		}
    })
}

main()
