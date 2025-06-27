"use strict";

module.exports = {
  types: [
    {
      value: "build",
      name: "BUILD"
    },
    { value: "ci", name: "CI/CD/SCRIPTS" },
    { value: "docs", name: "DOCUMENTS" },
    { value: "feat", name: "FEATURES" },
    { value: "fix", name: "FIX BUGS/ISSUES" },
    { value: "git", name: "GIT TASKS" },
    {
      value: "chore",
      name: "CHORE"
    },
    {
      value: "refactor",
      name:
        "REFACTOR"
    },
    { value: "revert", name: "REVERT" },
    {
      value: "style",
      name:
        "STYLE"
    },
    { value: "test", name: "TEST" }
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    { name: "COMPONENTS" },
    { name: "LOGIC" },
    { name: "INTERFACE/APPEARANCE" },
    { name: "SERVICES" },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  messages: {
    type: "Changes",
    scope: "\nScope:",
    customScope: "Specific scope",
    subject: "Short description:\n",
    body:
      'Full description. Use "|" for new string:\n',
    breaking: "Breaking changes:\n",
    footer:
      "Meta:\n",
    confirmCommit: "Is it correct:"
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: "Meta:",

  // limit subject length
  subjectLimit: 72
};