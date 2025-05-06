// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './globals/Header'
import { Pages } from './collections/Pages'
import { Sidebar } from './globals/Sidebar'
import { Work } from './collections/Work'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

import type { CollectionConfig } from 'payload'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export const MyCollection: CollectionConfig = {
  // ...
  admin: {
    // ...
  },
  fields: [],
  slug: '',
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data, collectionConfig }) =>
        `${process.env.NEXT_APP_URL}/api/preview?collection=${collectionConfig?.slug}&slug=${data.slug}`,
      collections: ['users', 'media', 'pages', 'work'],
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
      ],
    },
  },
  collections: [Users, Media, Pages, Work],
  globals: [Header, Sidebar],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      collections: {
        [Media.slug]: {
          prefix: 'media', // Optional: organizes files in a subfolder
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN, // Vercel Blob token
      clientUploads: true, // Enable for files >4.5MB
    }),
    // storage-adapter-placeholder
  ],
  cors: ['https://payload-cms-dun.vercel.app/', 'https://wdc-test-payload.vercel.app/'], // Allow Next.js app
  csrf: ['https://payload-cms-dun.vercel.app/', 'https://wdc-test-payload.vercel.app/'], // Allow Next.js app
})
