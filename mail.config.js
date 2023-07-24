export const mailConfig = {
    dateOptions: {
      // dateOptions is passed to JavaScript's toLocaleDateString()
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    },
    contactForm: {
      inputs: require('./content/contact-form.json'),
      recipient: 'RECIPIENT@EXAMPLE.com',
      sender: 'SENDER@EXAMPLE.com',
      subject: 'EMAIL NOTIFICATION SUBJECT',
    },
  }
  