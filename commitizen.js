'use strict';

module.exports = {
  types: [
    { value: 'BUILD', name: 'Build/major/minor update' },
    { value: 'FEAT', name: 'Features' },
    { value: 'CI', name: 'CI/CD' },
    { value: 'DOCS', name: 'Docs' },
    { value: 'FIX', name: 'Fix bugs & issues' },
    { value: 'GIT', name: 'Git maintenance' },
  ],
  messages: {
    type: 'Select the type:',
    version: 'Version:',
    subject: 'Short description:',
    confirmCommit:
      'Are you sure you want to proceed with the commit above?',
  },
  formatMessage: ({ type, version, subject }) =>
    `${type}; v:${version}; ${subject}`,
};
