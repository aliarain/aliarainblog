import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>future - aliarain</title>
        <meta name="description" content="the future i want build." />
      </Head>
      <SimpleLayout
        title="the future i'm building."
        intro="this pages is a list of things i'm currently building or have a plan to build a them.
        most of my future startups will be backed by open source generative machine learning models."
      >
        <div className="space-y-20">
          <Tool title="LLM">
            Future of software is working with large language models (LLM) and
            making sure the end-user uses it safely and model solve their. Such
            as developing a custom model on stable diffusion to automate the
            products images or building a model which generates codes or whole
            app in from just one prompt.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They dont make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If Im going to slouch in the worst ergonomic position imaginable all
            day, I might as well do it in an expensive chair.
          </Tool>
        </div>
      </SimpleLayout>
    </>
  )
}
