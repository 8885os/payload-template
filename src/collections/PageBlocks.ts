import { Block } from 'payload'

export const PageHero: Block = {
  slug: 'page-hero',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export const Accordion: Block = {
  slug: 'accordion',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
      ],
    },
  ],
}

export const SecondaryHero: Block = {
  slug: 'secondaryHero',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
  ],
}

export const WorkTabs: Block = {
  slug: 'workTabs',
  labels: {
    singular: 'Work Tabs',
    plural: 'Work Tabs',
  },
  fields: [],
}
