/**
 * This route is responsible for the Sanity Studio embedded in the Next.js app.
 * Editors visit /studio to manage all site content.
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-dynamic';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
