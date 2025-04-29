import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true, // Allow public read access for testing
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // Assuming you have a media collection
    },
    {
      name: 'navigationItems',
      type: 'array',
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
