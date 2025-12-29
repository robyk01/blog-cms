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
      title: 'Content',
      of: [
        {
          type: "block"
        },
        {
          type: "code",
          name: "code",
          title: "Code Blocks",
          options: {
            languageAlternatives: [
              { title: "Javascript", value: "javascript" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "Python", value: "python" },
              { title: "C++", value: "cpp" }, 
              { title: "React", value: "jsx" }, 
              { title: "Terminal", value: "sh" }, 
            ],
            withFilename: false,
          },
        },
      ],
    }),
  ],
})