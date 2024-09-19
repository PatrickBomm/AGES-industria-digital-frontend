// @ts-check
const tsEslint = require('@typescript-eslint/eslint-plugin');
const angularEslint = require('@angular-eslint/eslint-plugin');
const angularTemplateEslint = require('@angular-eslint/eslint-plugin-template');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
	{
		files: ["*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ["tsconfig.json"],
				createDefaultProgram: true
			}
		},
		plugins: {
			"@typescript-eslint": tsEslint,
			"@angular-eslint": angularEslint
		},
		rules: {
			...tsEslint.configs.recommended.rules,
			...angularEslint.configs.recommended.rules,
			"quotes": ["error", "single", { "allowTemplateLiterals": true }],
			"semi": ["error", "never"],
			"space-before-blocks": "error",
			"indent": ["error", 2, { "SwitchCase": 1 }],
			"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
			"no-unused-vars": "warn",
			"no-console": ["warn", { "allow": ["warn", "error"] }],
			"no-debugger": "error",
			"@typescript-eslint/explicit-function-return-type": ["warn", { "allowExpressions": true }],
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
			"@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
			"@typescript-eslint/no-inferrable-types": "off",
			"@angular-eslint/component-selector": [
				"error",
				{ "type": "element", "prefix": "app", "style": "kebab-case" }
			],
			"@angular-eslint/directive-selector": [
				"error",
				{ "type": "attribute", "prefix": "app", "style": "camelCase" }
			],
			"@angular-eslint/no-host-metadata-property": "error",
			"@angular-eslint/no-input-rename": "error",
			"@angular-eslint/no-output-on-prefix": "error",
			"@angular-eslint/use-lifecycle-interface": "warn",
			"@angular-eslint/no-conflicting-lifecycle": "error",
			"@angular-eslint/no-output-rename": "error",
		}
	},
	{
		files: ["*.html"],
		plugins: {
			"@angular-eslint/template": angularTemplateEslint
		},
		rules: {
			...(angularTemplateEslint.configs['recommended']?.rules || {}),
			"@angular-eslint/template/no-call-expression": "error",
			"@angular-eslint/template/no-negated-async": "error",
			"@angular-eslint/template/banana-in-box": "error",
			"@angular-eslint/template/no-any": "warn"
		}
	}
];
