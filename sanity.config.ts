'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'mercy-for-life',
  title: 'Mercy for Life',
  projectId: 'dni4r835',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.documentTypeListItem('event').title('Events'),
            S.documentTypeListItem('rosaryLocation').title('Rosary Locations'),
            S.documentTypeListItem('prayer').title('Prayers'),
            S.documentTypeListItem('resource').title('Resources'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
