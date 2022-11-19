import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Podcast - Ali Arain</title>
        <meta
          name="description"
          content="I have started a podcast to share the things I know about development, design, entrepreneurship and life in general.
          I share what I read and and make it publicly available to all of you to learn from it and not make mistakes what I did in my product and startups"
        />
      </Head>
      <SimpleLayout
        title="Making and listening to  podcast is one my favourite thing i do when i'm not solving a problem."
        intro="I have started a podcast to share the things I know about development, design, entrepreneurship and life in general.
          I share what I read and and make it publicly available to all of you to learn from it and not make mistakes what I did in my product and startups"
      >
        <div className="space-y-20">
          <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Competition is for losers."
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for raptr42."
              event="being ali"
              cta="Listen to podcast"
            />
          </SpeakingSection>
          <SpeakingSection title="Videos">
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
