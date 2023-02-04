import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { Button } from '@/components/Button'

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
        <div className="space-y-10">
          <Tool title="raptr42">
            at raptr, we are developing next-gen products for our clients.{' '}
            <br /> we are building their mvp and making sure it works easy to
            use it for the public and have a clear user experience.
            <br />
            <br />
            <Button href="https://raptr42.com">find more about us</Button>{' '}
          </Tool>
          <Tool title="using ai to build better tools">
            this is my main focus after raptr42, making the world of programming
            more easy to every other entrepreneur by building no-code tools and
            low code tools. i wrote a small blog post <br />
            for this you can read here to get insights of what im building.
            <br />
            <br />
            <Button href="https://aliarain.raptr42.com/notes/changing-world-with-ai">
              read my note
            </Button>{' '}
          </Tool>
          <Tool title="LLM">
            Future of software is working with large language models (LLM) and
            making sure the end-user uses it safely and model solve their. Such
            as developing a custom model on stable diffusion to automate the
            products images.
          </Tool>
          <Tool title="LiftOff">
            the simple tools to build web/mobile apps faster with generative
            artificial intelligence. No need to have tons of developer working
            on a single project.LiftOff your product more faster with AI.
          </Tool>
        </div>
      </SimpleLayout>
    </>
  )
}
