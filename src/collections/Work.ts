import type { CollectionConfig } from 'payload'
import { contact, hero, imageGrid, ImageWithText, otherProjects, richText } from './WorkBlocks'

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
        imageGrid,
        richText,
        hero,
        otherProjects,
        contact,
      ],
    },
  ],

  access: {
    read: () => true,
  },
}
