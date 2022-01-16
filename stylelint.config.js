module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        indentation: 4,
        'string-quotes': 'single',
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
            }
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
        'selector-pseudo-class-no-unknown': null
    }
};
