// src/collections/Pages.ts
import { CollectionConfig } from 'payload'
import { Accordion, PageHero, SecondaryHero, WorkTabs } from './PageBlocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow public read access for frontend
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true, // Ensure unique slugs for routing
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [PageHero, Accordion, SecondaryHero, WorkTabs],
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
}
