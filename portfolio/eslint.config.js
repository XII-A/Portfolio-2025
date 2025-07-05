import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config([
    globalIgnores(['dist', 'routerTree.gen.ts']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            eslintConfigPrettier.configs.recommended,
            eslintPluginJsxA11y.configs.recommended,
            unusedImports.configs.recommended
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        }
    }
])
