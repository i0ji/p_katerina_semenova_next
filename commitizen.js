'use strict';

module.exports = {
  types: [
    { value: 'build', name: 'build: Build/major/minor update' },
    { value: 'feat', name: 'feat: New feature' },
    { value: 'fix', name: 'fix: Bug fix' },
    { value: 'docs', name: 'docs: Documentation changes' },
    { value: 'chore', name: 'chore: Maintenance tasks' },
    { value: 'ci', name: 'ci: Continuous Integration' },
    { value: 'refactor', name: 'refactor: Code refactoring' },
    { value: 'perf', name: 'perf: Performance improvements' },
    { value: 'test', name: 'test: Adding tests' },
    { value: 'style', name: 'style: Code style changes (formatting, etc)' },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  footerPrefix: 'ISSUES CLOSED:',
  subjectLimit: 72,
};
