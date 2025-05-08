import type { CollectionConfig } from 'payload'
import {
  BoldFeature,
  FixedToolbarFeature,
  ItalicFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { protectRoles } from './hooks/protectRoles'
import { editor } from './access/editor'
import { user } from './access/user'
import { admin } from './access/admin'
export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    //create: () => true,
    //read: user,
    //update: () => true,
    //delete: admin,
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],
      /* hooks: {
        beforeChange: [protectRoles],
      }, */
    },
    // Email added by default
    // Add more fields as needed
  ],
}
