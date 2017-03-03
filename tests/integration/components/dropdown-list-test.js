import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dropdown-list', 'Integration | Component | dropdown list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


  this.set('content', [{ id: 1, label: 'one' }]);

  this.render(hbs`{{dropdown-list optionValuePath="content.id" optionLabelPath="content.label" }}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
	{{#dropdown-list}}
	  template block text
	{{/dropdown-list}}
  `);

  assert.equal(this.$().text().trim(), '');
});
