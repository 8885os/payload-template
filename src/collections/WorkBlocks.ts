import { Block } from 'payload'

export const ImageWithText: Block = {
  slug: 'imageWithText',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}

export const ImageGrid: Block = {
  slug: 'imageGrid',
  fields: [
    {
      name: 'images',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
    },
  ],
}

export const RichText: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
  ],
}

export const Hero: Block = {
  slug: 'hero',
  fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
}

export const OtherProjects: Block = {
  slug: 'otherProjects',
  labels: {
    singular: 'Other Projects',
    plural: 'Other Projects',
  },
  fields: [
    {
      name: 'info',
      type: 'text',
      admin: {
        readOnly: true,
      },
      defaultValue: '📌 This block auto-displays 4 other latest projects. No input needed.',
    },
  ],
}

export const Contact: Block = {
  slug: 'contact',
  labels: {
    singular: 'Contact',
    plural: 'Contact',
  },
  fields: [
    {
      name: 'info',
      type: 'text',
      admin: {
        readOnly: true,
      },
      defaultValue: '📌 This block displays a contact block',
    },
  ],
}
