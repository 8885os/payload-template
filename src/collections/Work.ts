import type { CollectionConfig } from 'payload'
import { Contact, ImageGrid, ImageWithText, OtherProjects, RichText, Hero } from './WorkBlocks'
export const Work: CollectionConfig = {
  slug: 'work',
  labels: {
    singular: 'Work',
    plural: 'Work',
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
      unique: true,
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        // Custom blocks below
        ImageWithText,
        ImageGrid,
        RichText,
        Hero,
        OtherProjects,
        Contact,
      ],
    },
  ],

  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
}
