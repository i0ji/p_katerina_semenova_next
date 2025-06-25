'use strict';

module.exports = {
  types: [
    {
      value: 'BUILD',
      name: 'BUILD',
    },
    { value: 'CI', name: 'CI/CD/SCRIPTS' },
    { value: 'DOCS', name: 'DOCUMENTS' },
    { value: 'FEAT', name: 'FEATURES' },
    { value: 'FIX', name: 'FIX BUGS/ISSUES' },
    { value: 'GIT', name: 'GIT TASKS' },
    {
      value: 'REFACTOR',
      name: 'REFACTOR',
    },
    { value: 'REVERT', name: 'REVERT' },
    {
      value: 'STYLE',
      name: 'STYLE',
    },
    { value: 'TEST', name: 'TEST' },
  ],

  scopes: [
    { name: 'COMPONENTS' },
    { name: 'LOGIC' },
    { name: 'INTERFACE/APPEARANCE' },
    { name: 'SERVICES' },
    { name: 'CHORE/MAINTENANCE' },
  ],

  messages: {
    type: 'Changes',
    scope: '\nScope:',
    customScope: 'Specific scope',
    subject: 'Short description:\n',
    body: 'Full description. Use "|" for new string:\n',
    breaking: 'Breaking changes:\n',
    footer: 'Version:\n',
    confirmCommit: 'Is it correct:',
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'Version:',

  // limit subject length
  subjectLimit: 72,
};
