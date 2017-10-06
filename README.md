# ember-cli-dropdown-list

[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-dropdown-list.svg)](http://emberobserver.com/addons/ember-cli-dropdown-list)
[![Build Status](https://travis-ci.org/devotox/ember-cli-dropdown-list.svg)](http://travis-ci.org/devotox/ember-cli-dropdown-list)
[![Coverage Status](https://coveralls.io/repos/github/devotox/ember-cli-dropdown-list/badge.svg)](https://coveralls.io/github/devotox/ember-cli-dropdown-list)
[![NPM Version](https://badge.fury.io/js/ember-cli-dropdown-list.svg)](http://badge.fury.io/js/ember-cli-dropdown-list)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-dropdown-list.svg)](https://www.npmjs.org/package/ember-cli-dropdown-list)
[![Greenkeeper badge](https://badges.greenkeeper.io/devotox/ember-cli-dropdown-list.svg)](https://greenkeeper.io/)


## Description
This dropdown supports single selections as well as multiple sections. See example usage below.

[DEMO](http://devotox.github.io/ember-cli-dropdown-list)

## Installation
* `ember install ember-cli-dropdown-list`

## Usage
```javascript
	single item selection example

	{{dropdown-list
		content=myDataList
		value=myAwesomeValue
		class="chosen-select"
		action="myChangeAction"
		prompt="Choose your poison"
		optionValuePath="content.value"
		optionLabelPath="content.label"
	}}

	multiple item selection example

	{{dropdown-list
		content=myDataList
		value=myAwesomeValues
		class="chosen-select"
		action="myChangeAction"
		prompt="Choose your poisons"
		optionValuePath="content.value"
		optionLabelPath="content.label"
	}}

	content: Array<object>
	optionValuePath: string denoting the path to an item in the content array to use when updating the value property (see below for information on value)
	optionLabelPath: string denoting the path to an item in the content array to use as a nice string to render in the list item
	value: object that should be updated with the selected value in the dropdown list. The actual value set is dependent on the optionValuePath
	multiple: boolean value denoting whether multiple items in the list can be selected. Default is false.
	class: string that should be used as class name for the select element
	prompt: optional string to display on the top of the dropdown list when nothing is selected
	action: name of function to invoke when the selected option changes
```
