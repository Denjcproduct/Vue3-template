module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard-scss','stylelint-config-recommended-vue/scss', 'stylelint-config-rational-order'],
  rules: {
  'no-descending-specificity': null,
  "selector-class-pattern": null,
  'color-hex-length': 'long',
  'max-nesting-depth': [
  4,
  {
  message: 'Nesting > 4 level',
  ignore: ['blockless-at-rules'],
  severity: 'warning'
  }
  ],
  'string-quotes': [
  'single',
  {
  message: 'Use single quotes'
  }
  ],
  'order/order': [
  'custom-properties',
  'declarations',
  {
  type: 'at-rule',
  name: 'media'
  },
  {
  type: 'rule',
  selector: '^&::(before|after)'
  },
  {
  type: 'rule',
  selector: '^&:\\w'
  },
  {
  type: 'rule',
  selector: '^&__'
  },
  {
  type: 'rule',
  selector: '^&_'
  },
  {
  type: 'rule',
  selector: '^.'
  }
  ]
  }
  }
  