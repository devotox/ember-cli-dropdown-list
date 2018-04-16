import { get } from '@ember/object';

import { warn } from '@ember/debug';

import Component from '@ember/component';

import layout from '../templates/components/dropdown-list';

export default Component.extend({
	layout,
	content: null,
	selectedValue: null,
	setAttrs(){
		let content = (this.get('content') || []).slice();

		//get the label path if there is any if not default to '' which just takes the object
		let labelPath = this.get('optionLabelPath');
		if (labelPath && labelPath.indexOf('content.') === 0) {
			labelPath = labelPath.replace('content.', '');
		}

		let valuePath = this.get('optionValuePath') || '';
		if (valuePath && valuePath.indexOf('content.') === 0) {
			valuePath = valuePath.replace('content.', '');
		}

		//if for some reason the user has not supplied a valuePath or a labelPath show warning
		//map the data to have an id and a label property essentially of the same values
		if (!valuePath || !labelPath) {
			valuePath = valuePath || 'id';
			labelPath = labelPath || 'label';

			content = content.map( item => {
				let value = valuePath === 'content' ? item : get(item, valuePath),
					label = labelPath === 'content' ? item : get(item, labelPath);

				return { id: value, label:label };
			});
			valuePath = 'id';
			labelPath = 'label';
			content = content.map((item) => { return { id: item, label: item }; });
			warn('You have not set the optionValuePath and the optionLabelPath for the dropdown-list component', {
				id: 'option-value-path'
			});
		}

		//get the prompt text if any otherwise set a default
		let prompt = this.get('prompt');

		//prepend the content with the prompt text
		if(prompt) {
			content.unshift({[valuePath]: '', [labelPath]: prompt});
		}

		this.set('labelPath', labelPath);
		this.set('valuePath', valuePath);
		this.set('contentCopy', content);
	},
	init() {
		this._super(...arguments);
		this.setAttrs();
	},
	didUpdateAttrs() {
		this._super(...arguments);
		this.setAttrs();
	},
	change(event) {
		const content = this.get('contentCopy');
		const action = this.get('action');
		let valuePath = this.get('optionValuePath') || '';
		if (valuePath) {
			if (valuePath === 'content') {
				valuePath = '';
			} else if (valuePath.indexOf('content.') === 0) {
				valuePath = valuePath.replace('content.', '');
			}
		}

		let selectedOptions = Object.keys([].slice.call(event.target.selectedOptions))
			.map(key => {
				let option = event.target.selectedOptions[key];
				let optionValue = content[option.getAttribute('data-index')];
				return get(optionValue, valuePath);
			});

		const selectedValues = content.filter(option => {
			return selectedOptions.indexOf(get(option, valuePath)) > -1;
		}).map(value => {
			return get(value, valuePath);
		});

		if (!this.get('multiple')) {
			this.set('value', selectedValues[0]);
		} else {
			this.set('value', selectedValues);
		}

		if (action) {
			this.sendAction('action', selectedValues); // eslint-disable-line
		}
	}
});
