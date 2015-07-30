# dot-helper
> No name given yet

## Install

Install it with

```
npm install dot-helper
```
## Usage

```
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

```

## Author

* Vittorio Zaccaria

## License
Released under the BSD License.

***



# New features

-     generates array of structures boilerplate -- [Jul 30th 15](../../commit/4d3e312c11c6001c9981121b53892ff3a593ae74)

# Changes to the build process

-     fix tabs -- [Jul 30th 15](../../commit/e5b2c2c8abd125b6798814db507bbf751a3a5757)
