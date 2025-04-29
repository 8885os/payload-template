import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: () => true, // Allow public read access for testing
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
