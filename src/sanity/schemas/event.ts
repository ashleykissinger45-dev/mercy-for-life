import { defineType, defineField } from 'sanity';

export const eventSchema = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status (fallback)',
      type: 'string',
      description: 'Only used if no Event Date is set above. The site auto-determines upcoming vs previous from the date.',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Previous', value: 'previous' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateISO',
      title: 'Event Date',
      type: 'date',
      description: 'The event date — displayed on the site and used to auto-determine upcoming vs previous',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g. "11 AM"',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each item is a separate paragraph. The last item will be styled as a quote.',
    }),
    defineField({
      name: 'details',
      title: 'Extra Details',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points shown in the details box (e.g. parking info, what to bring)',
    }),
    defineField({
      name: 'directionsUrl',
      title: 'Directions URL',
      type: 'url',
      description: 'Google Maps or other directions link for upcoming events',
    }),
    defineField({
      name: 'link',
      title: 'External Link URL',
      type: 'url',
      description: 'Optional link for previous events (e.g. Instagram)',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      description: 'Label for the link button (e.g. "View Our Instagram")',
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
    select: {
      title: 'title',
      subtitle: 'dateISO',
    },
    prepare({ title, subtitle }: { title: string; subtitle?: string }) {
      const today = new Date().toISOString().split('T')[0];
      const isUpcoming = subtitle ? subtitle >= today : false;
      const display = subtitle ? new Date(subtitle + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : '';
      return {
        title,
        subtitle: `${isUpcoming ? '🟢 Upcoming' : '⚫ Previous'} · ${display}`,
      };
    },
  },
    },
  },
});
