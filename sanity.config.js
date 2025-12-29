import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { codeInput, CodeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'c9ne3cpn',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
