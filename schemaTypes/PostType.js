import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'}, 
        defineField({
          type: 'code',
          name: 'code',
          title: 'Code Block',
          options: {
            language: 'python',
            languageAlternatives: [
              {title: 'Python', value: 'python'},
              {title: 'C++', value: 'cpp'},
              {title: 'JSON', value: 'json'},
              {title: 'Bash', value: 'sh'},
            ],
            withLineNumbers: true, 
          },
        }),
      ],
    }),
  ],
})