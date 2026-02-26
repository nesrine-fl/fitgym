module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: 'postcss',
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen',
        'layer',
        'base',
        'components',
        'utilities',
        'config'
      ]
    }],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
};