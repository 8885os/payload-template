import type { CollectionConfig } from 'payload'

export const Components: CollectionConfig = {
  slug: 'components',
  labels: {
    singular: 'Component',
    plural: 'Components',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true, // Ensure unique slugs for routing
    },
  ],
  access: {
    read: () => true,
  },
}
