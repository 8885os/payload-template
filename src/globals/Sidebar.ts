import { GlobalConfig } from 'payload'

export const Sidebar: GlobalConfig = {
  slug: 'sidebar',
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
      name: 'socialIcons',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Assuming you have a media collection
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
  ],
}
