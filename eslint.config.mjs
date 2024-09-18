// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
  allConfig: pluginJs.configs.all,
});

const patchedConfig = fixupConfigRules([
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends('next/core-web-vitals'),
]);

const config = [
  ...patchedConfig,
  ...tsEslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  prettierConfigRecommended, // Last since it disables some previously set rules
  { ignores: ['.next/*'] },
];

export default config;
