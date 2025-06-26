import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const processEnv = typeof process !== 'undefined' ? process.env : { NODE_ENV: 'development' };

export default [
  // Fichiers à ignorer globalement
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'back/dist/**',
      'build/**',
      '.github/**',
      '*.md',
      '*.sql',
      'package-lock.json',
      'front/.next/**',
      '.idea/**',
      '.husky/**',
    ],
  },

  // Config commune JS/TS à tout le repo
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': processEnv.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': processEnv.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },

  // Backend (API / Node)
  {
    files: ['back/**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        exports: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      'no-process-exit': 'off',
    },
  },

  // Tests Jest du back
  {
    files: [
      'back/**/__tests__/**/*.{js,ts,tsx}',
      'back/**/*.test.{js,ts,tsx}',
      'back/**/*.spec.{js,ts,tsx}',
    ],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
        vitest: 'readonly',
      },
    },
  },

  // Frontend (navigateur)
  {
    files: ['front/**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
      },
    },
    rules: {
      'no-alert': 'warn',
    },
  },

  // JS à la racine (ex: config)
  {
    files: ['*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },

  // TypeScript strict, sélectionne le tsconfig selon le sous-dossier
  {
    files: ['front/**/*.ts', 'front/**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./front/tsconfig.json'],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  {
    files: ['back/**/*.ts', 'back/**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./back/tsconfig.json'],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // Intégration de Prettier à la fin (toujours après tout le reste !)
  prettierConfig,
];
