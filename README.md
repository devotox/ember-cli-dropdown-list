# ember-cli-dropdown-list

[![Greenkeeper badge](https://badges.greenkeeper.io/devotox/ember-cli-dropdown-list.svg)](https://greenkeeper.io/)

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-dropdown-list`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Usage
```javascript
/**
 * Ember select component
 * due to deprecation of view 'select' http://emberjs.com/deprecations/v1.x/#toc_ember-select
 * 20 November 2015
 * This dropdown supports single selections as well as multiple sections. See example usage below.
	 single item selection example
	 {{
		dropdown-list
		content=myDataList
		optionValuePath="content.id"
		optionLabelPath="content.label"
		value=myAwesomeValue
		action="myChangeAction"
		prompt="Choose your poison"
	}}
	multiple item selection example
	{{
		dropdown-list
		content=myDataList
		optionValuePath="content.id"
		optionLabelPath="content.label"
		value=myAwesomeValues
		multiple=true
		class="chosen-select"
		action="myChangeAction"
		prompt="Choose your poison"
	}}
	content: Array<object>
	optionValuePath: string denoting the path to an item in the content array to use when updating the value property (see below for information on value)
	optionLabelPath: string denoting the path to an item in the content array to use as a nice string to render in the list item
	value: object that should be updated with the selected value in the dropdown list. The actual value set is dependent on the optionValuePath
	multiple: boolean value denoting whether multiple items in the list can be selected. Default is false.
	class: string that should be used as class name for the select element
	prompt: optional string to display on the top of the dropdown list when nothing is selected
	action: name of function to invoke when the selected option changes
 */
