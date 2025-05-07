import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
  upload: {
    modifyResponseHeaders({ headers }) {
      if (headers.get('content-type') === 'application/xml') {
        headers.set('content-type', 'image/svg+xml; charset=utf-8')
      }
      return headers
    },
  },
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        // If the blob plugin added a `filename`, construct the Blob URL
        if (data.filename) {
          data.url = `${process.env.BLOB_URL}/${data.filename}`
        }
        return data
      },
    ],
  },
}
