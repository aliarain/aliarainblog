export default {
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    },
  ],
}
