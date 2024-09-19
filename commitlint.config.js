module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', [
			'feat',
			'fix',
			'chore',
			'docs',
			'style',
			'refactor',
			'test',
			'bug-fix'
		]],
		'subject-case': [2, 'always', 'sentence-case'],
		'scope-case': [2, 'always', 'kebab-case'],
		'header-max-length': [2, 'always', 72],
		'type-empty': [0],
		'subject-empty': [0]
	}
};
