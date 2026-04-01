import { defineType, defineField } from 'sanity';

export const rosaryLocationSchema = defineType({
  name: 'rosaryLocation',
  title: 'Rosary Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'e.g. "4141 N 32nd Street, Phoenix, AZ"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapsQuery',
      title: 'Google Maps Search Query',
      type: 'string',
      description: 'Used for the "Get Directions" link. e.g. "Camelback+Family+Planning+4141+N+32nd+Street+Phoenix+AZ"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'times',
      title: 'Prayer Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'day', title: 'Day', type: 'string', description: 'e.g. "Wednesday"' }),
            defineField({ name: 'time', title: 'Time', type: 'string', description: 'e.g. "9:30am"' }),
          ],
          preview: {
            select: { day: 'day', time: 'time' },
            prepare({ day, time }) {
              return { title: `${day} at ${time}` };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'parkingUrl',
      title: 'Parking Map URL',
      type: 'url',
      description: 'Optional Google Maps link to parking location',
    }),
    defineField({
      name: 'parkingNote',
      title: 'Parking Note',
      type: 'string',
      description: 'Optional note about where to park',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
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
    select: { title: 'name', subtitle: 'address' },
  },
});
