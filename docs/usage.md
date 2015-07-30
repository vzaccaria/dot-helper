Usage:
	dot-helper array VARNAME -s SNAME [-n NUM] [ -i IT ] [ -m MAX ]
	dot-helper ( -h | --help )

Options:
	-h, --help              help for dot-helper
	-s, --structure SNAME   name of the structure
	-n, --number NUM        number of the subgraph               (default: '0')
	-i, --iterator IT       name of the iteratori to use         (default: 'i')
	-m, --max MAX           name of the upper bound of the array (default: '?')
Commands:
	array                   generates a dot representation of an array of structs

Arguments:
	VARNAME                 name of the variable array
