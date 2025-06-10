'use strict';

module.exports = {
  types: [
    {
      value: 'BUILD',
      name: 'BUILD',
    },
    { value: 'CI', name: 'CI/CD/SCRIPTS' },
    { value: 'DOCS', name: 'DOCUMENTS' },
    { value: 'FEATURE', name: 'FEATURES' },
    { value: 'FIX', name: 'FIX BUGS/ISSUES' },
    { value: 'GIT', name: 'GIT TASKS' },
    {
      value: 'CHORE',
      name: 'CHORE',
    },
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
  ],

  messages: {
    type: 'Changes',
    scope: '\nScope:',
    customScope: 'Specific scope',
    subject: 'Short description:\n',
    body: 'Full description. Use "|" for new string:\n',
    breaking: 'Breaking changes:\n',
    footer: 'Meta:\n',
    confirmCommit: 'Is it correct:',
  },

  allowCustomScopes: true,

  allowBreakingChanges: false,

  footerPrefix: 'Meta:',

  subjectLimit: 72,
};