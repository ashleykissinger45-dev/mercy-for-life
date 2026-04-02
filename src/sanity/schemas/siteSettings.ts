import { defineType, defineField } from 'sanity';

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline on the homepage',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'Tagline below the hero title',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Box Title',
      type: 'string',
      initialValue: 'Our Vision',
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Statement',
      type: 'text',
      rows: 5,
      description: 'The blue box text on the homepage',
    }),
    defineField({
      name: 'rosaryWhatToBring',
      title: '"What to Bring" Note',
      type: 'text',
      rows: 2,
      description: 'Shown at the bottom of the Rosary Schedule section',
    }),
    defineField({
      name: 'announcementText',
      title: 'Announcement Banner Text',
      type: 'string',
      description: 'Optional site-wide announcement (leave blank to hide)',
    }),
    defineField({
      name: 'churchUrl',
      title: 'Parish Website URL',
      type: 'url',
      description: 'St. Thomas the Apostle Church website (e.g. https://staphx.org)',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
