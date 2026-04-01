import { eventSchema } from './event';
import { rosaryLocationSchema } from './rosaryLocation';
import { prayerSchema } from './prayer';
import { resourceSchema } from './resource';
import { siteSettingsSchema } from './siteSettings';

export const schemaTypes = [
  eventSchema,
  rosaryLocationSchema,
  prayerSchema,
  resourceSchema,
  siteSettingsSchema,
];
