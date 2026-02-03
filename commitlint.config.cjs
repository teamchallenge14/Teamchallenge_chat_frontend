// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['QTAL-'],
    },
  },
  rules: {
    // Team decision: warn if commit has no task reference (QTAL-XXX)
    'references-empty': [1, 'never'],

    // Enforce a specific set of commit types
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],

    // Hygiene rules (stable, non-controversial)
    'type-case': [2, 'always', 'lower-case'],
    'scope-case': [2, 'always', 'lower-case'],

    // Don't enforce subject casing (team-friendly)
    'subject-case': [0],

    // GitHub-friendly commit header length
    'header-max-length': [2, 'always', 72],
  },
};
