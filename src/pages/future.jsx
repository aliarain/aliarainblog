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
            At raptr42, im inspired by the potential of technology to change the
            world for the better. Our founder was captivated by the story of{' '}
            SpaceX and its founder Elon Musk, who had a vision to make humanity
            a multi-planetary species. This vision of exploring and developing
            new frontiers in technology inspired our founder to focus on
            building AI-first products that will shape the future. We believe
            that AI has the power to revolutionize our world, just as the
            internet did in the past. im dedicated to building cutting-edge
            digital products that harness the power of AI to solve real problems
            and make a positive impact on society. Our team of experts is
            passionate about innovation and committed to helping our clients
            bring their ideas to life, from ideation to deployment. im on a
            mission to build a better future through technology, and im always
            looking for new partners and investors to join us on this journey.
            <br />
            <br />
            <Link
              className="no-underline hover:underline"
              href="https://raptr42.com"
            >
              find more about us
            </Link>{' '}
          </Tool>
          <Tool title="using ai to build better tools">
            i think theres a real possibility that basically every application{' '}
            category gets upended in the next five years highlights the
            potential impact of artificial intelligence (AI) on the software
            development industry. The integration of AI in software development
            could lead to a major shift in the way applications are built and
            used, with a potential change in the traditional model of software
            development. The introduction of AI may result in more efficient and
            effective applications and provide new opportunities and challenges
            for those in the tech industry.
            <br />
            <br />
            <Link
              className="no-underline hover:underline"
              href="https://aliarain.raptr42.com/notes/changing-world-with-ai"
            >
              read my note
            </Link>{' '}
          </Tool>
          <Tool title="Large Language models">
            Large Language models, theyre the future of technology. Theyre gonna
            change the game, just like Elon did with Tesla and SpaceX. You see,
            with language models, were not just talking about a new tool, were
            talking about a whole new level of innovation. They have the ability
            to generate high-quality text, music, and code, faster and more
            efficiently than ever before. This is going to revolutionize the way
            we design and build everything from software to images, videos, and
            other forms of media. Think about it, with language models, we can
            generate custom code or design a new product in a fraction of the
            time it would normally take. Thats the kind of efficiency and
            innovation that were talking about. Were not just automating routine
            tasks, were enabling entirely new ways of designing and building
            things. And you know, Im always about disrupting industries and
            pushing the boundaries of whats possible. Thats what language models
            are doing right now. They represent a paradigm shift in the way we
            think about and interact with technology. And the possibilities,
            theyre truly endless. So buckle up, folks. Language models are just
            getting started and the future is looking brighter than ever.
          </Tool>
          <Tool title="LiftUp">
            LiftUp is the game-changer for building web and mobile
            applications. With its cutting-edge generative artificial
            intelligence technology, its revolutionizing the way developers
            work. Say goodbye to the days of having to hire a team of developers
            and spend months working on a single project. LiftUp streamlines
            the development process and helps you launch your product faster and
            more efficiently. With its simple tools, you can now create
            high-quality apps without the need for extensive coding knowledge.
            Whether youre a solo entrepreneur or a startup team, LiftUp
            empowers you to bring your ideas to life with ease. But thats not
            all, LiftUps AI-powered technology also helps you create more
            advanced and unique apps. Say goodbye to generic designs and boring
            interfaces. With LiftUp, you can create apps that stand out and
            provide a unique and engaging user experience. In conclusion,
            LiftUp is a must-have tool for anyone looking to build web and
            mobile apps. With its ease of use and time-saving capabilities, its
            the perfect solution for anyone who wants to bring their product to
            market faster and more efficiently.
            <br />
            <br />
            <Link
              className="no-underline hover:underline"
              href="https://aliarain.raptr42.com/notes/building-liftupai"
            >
              read my note
            </Link>{' '}
          </Tool>
        </div>
      </SimpleLayout>
    </>
  )
}
