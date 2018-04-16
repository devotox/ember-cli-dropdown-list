import Controller from '@ember/controller';

export default Controller.extend({
	myDataList: [ // eslint-disable-line
		{ value: 'no', label: 'No' },
		{ value: 'yes', label: 'Yes' },
		{ value: 'maybe', label: 'Maybe' },
		{ value: 'yes-no', label: 'Yes & No' }
	]
});
