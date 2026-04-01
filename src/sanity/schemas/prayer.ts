import { defineType, defineField } from 'sanity';

export const prayerSchema = defineType({
  name: 'prayer',
  title: 'Prayers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Prayer Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description shown below the title',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'e.g. "Fr. Frank Pavone"',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link URL',
      type: 'url',
      description: 'Link to the full prayer text (optional)',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Button Text',
      type: 'string',
      description: 'e.g. "Read the Prayer"',
      initialValue: 'Read the Prayer',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'author' },
  },
});
