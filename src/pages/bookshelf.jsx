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
            <Tool>
            Superintelligence: Paths, Dangers, Strategies — Nick Bostrom

Sapiens: A Brief History of Humankind — Yuval Noah Harari

Troublemakers: Silicon Valley's Coming of Age — Leslie Berlin

A Mathematician's Apology — G.H. Hardy

The Drunkard's Walk: How Randomness Rules Our Lives — Leonard Mlodinow

The Sharing Economy: The End of Employment and the Rise of Crowd-Based Capitalism — Arun Sundararajan

The Charisma Myth: How Anyone Can Master the Art and Science of Personal Magnetism — Olivia Fox Cabane

The Startup Owner's Manual: The Step-By-Step Guide for Building a Great Company — Steve Blank

Hit Refresh — Satya Nadella

The Four: The Hidden DNA of Amazon, Apple, Facebook, and Google — Scott Galloway

Narconomics: How to Run a Drug Cartel — Tom Wainwright

The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution — Walter Isaacson

Finite and Infinite Games — James P. Carse

The Founder's Dilemmas: Anticipating and Avoiding the Pitfalls That Can Sink a Startup — Noam Wasserman

The Kind Worth Killing — Peter  Swanson

The Idea Factory: Bell Labs and the Great Age of American Innovation — Jon Gertner

Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values — Robert M. Pirsig

The Three Body Problem — Liu Cixin

The Dark Forest — Liu Cixin

Death's End — Liu Cixin

Algorithms to Live By: The Computer Science of Human Decisions — Brian Christian

The Case Against Education: Why the Education System Is a Waste of Time and Money — Bryan Caplan

The Circle — Dave Eggers

Hatching Twitter: A True Story of Money, Power, Friendship, and Betrayal — Nick Bilton

The New New Thing: A Silicon Valley Story — Michael Lewis

Why We Sleep: Unlocking the Power of Sleep and Dreams — Matthew Walker

Skin in the Game: Hidden Asymmetries in Daily Life — Nassim Nicholas Taleb

Daemon — Daniel Suarez

PoC||GTFO — Manul Laphroaig

Peer-To-Peer Computing: Applications, Architecture, Protocols, and Challenges — Yu-Kwong Ricky Kwok

Freedom — Daniel Suarez

Bad Blood: Secrets and Lies in a Silicon Valley Startup — John Carreyrou

The Dream Machine — M. Mitchell Waldrop

The Making of the Atomic Bomb — Richard Rhodes

Satisfaction: The Science of Finding True Fulfillment — Gregory Berns

Something Incredibly Wonderful Happens — K.C. Cole

The Revolt of The Public and the Crisis of Authority in the New Millennium — Martin Gurri

Where Is Everybody? Fifty Solutions to the Fermi Paradox and the Problem of Extraterrestrial Life — Stephen Webb

The Fish That Ate the Whale: The Life and Times of America's Banana King — Rich Cohen

Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones — James Clear

Out of Mao's Shadow: The Struggle for the Soul of a New China — Philip P. Pan

Age of Ambition: Chasing Fortune, Truth, and Faith in the New China — Evan Osnos

The Beginning of Infinity: Explanations That Transform the World — David Deutsch

Creativity, Inc: Overcoming the Unseen Forces That Stand in the Way of True Inspiration — Ed Catmull

How to Invent Everything: A Survival Guide for the Stranded Time Traveler — Ryan North

Only the Paranoid Survive — Andrew S. Grove

Nexus — Ramez Naam

Tools of Titans — Timothy Ferriss

Show Stopper! The Breakneck Race to Create Windows NT and the Next Generation at Microsoft — G. Pascal Zachary

Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture — David Kushner

Titan: The Life of John D. Rockefeller, Sr. — Ron Chernow

Hooked: How to Build Habit-Forming Products — Nir Eyal

Atlas Shrugged — Ayn Rand

Walt Disney: The Triumph of the American Imagination — Neal Gabler

Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind How Video Games Are Made — Jason Schreier

Chaos Monkeys: Obscene Fortune and Random Failure in Silicon Valley — Antonio García Martínez

Zero to One: Notes on Startups, or How to Build the Future — Peter Thiel

Opening the Xbox: Inside Microsoft's Plan to Unleash an Entertainment Revolution — Dean Takahashi

Barbarian Days: A Surfing Life — William Finnegan

Video Encoding by the Numbers — Jan Lee Ozer

Solve for Happy: Engineer Your Path to Joy — Mo Gawdat

How the Internet Happened: From Netscape to the iPhone — Brian  McCullough

The Diamond Age: Or, A Young Lady's Illustrated Primer — Neal Stephenson

Man's Search for Meaning — Viktor E. Frankl

Homo Ludens: A Study of the Play-Element in Culture — Johan Huizinga

Computer Networking: A Top-Down Approach — James F. Kurose

The Wisdom of Insecurity: A Message for an Age of Anxiety — Alan W. Watts

Console Wars: Sega, Nintendo, and the Battle that Defined a Generation — Blake J. Harris

Trillion Dollar Coach: The Leadership Playbook of Silicon Valley's Bill Campbell — Eric Schmidt

Blade Runner — Philip K. Dick

Twenty Minutes in Manhattan — Michael Sorkin
            </Tool>
            </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
