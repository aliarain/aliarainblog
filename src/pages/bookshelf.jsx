import Head from 'next/head'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
const bookshelf =[
{name:"Super Intelligence",
name:"i'll add later "},
]


function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}


function Tool({ title,children }) {
  return (
    <Card as="li">
      <Card.Title as="h3">
        {children}
      </Card.Title>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>bookshelf - ali arain</title>
        <meta
          name="description"
          content="personal bookshelf"
        />
      </Head>
      <SimpleLayout
        title="personal bookshelf."
        intro="the list of the book si have already read in my life or currently reading to stay ahead of everyone in the industry. the page is update monthly"
      >
        <div className="space-y-20">
          <ToolsSection title="Books">
            {bookshelf.map((books) => (
          <Tool key={books.name}>{books.name}</Tool>    
            ))}
            
            </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
