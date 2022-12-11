export default {
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'isCurrentlyWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
