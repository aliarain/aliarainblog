import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ali Arain</title>
        <meta
          name="description"
          content="I’m Ali Arain. I live in Pakistan, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Ali Arain. I live in Pakistan, where m designing the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a passionate maker and problem solver from Pakistan. From
                the moment I received my first computer as a child, I knew that
                I wanted to spend my life creating and building.
              </p>
              <p>
                Over the years, my interests have evolved and grown, but one
                constant has remained – my love for space and rockets. As a
                young boy, I watched in awe as the Falcon Heavy lifted off for
                the first time, and since then, I have been a diehard fan of
                Elon Musk and his companies, particularly SpaceX. I have spent
                countless hours reading about rocket design and deep space
                exploration, and I am always excited to learn about new
                companies working on reusable rockets.
              </p>
              <p>
                In addition to my love for space, I have also developed a
                passion for artificial intelligence. The process of building
                recommendation systems and AI algorithms is endlessly
                fascinating to me, and I often spend my weekends tinkering with
                and learning about new AI technologies.
              </p>
              <p>
                Today, I’m the founder of{' '}
                <a href="https://raptr42.com/">raptr42</a>, a digital product
                development company focused on creating impactful products that
                help solve real problems for people. As the leader of our
                product team, I am responsible for overseeing all aspects of our
                development process, from ideation to deployment. As the founder
                of raptr42, I have the opportunity to work with a talented team
                of developers, designers, and product managers to create
                innovative solutions for our clients. We are a high-tech startup
                that is constantly pushing the boundaries of what is possible
                with technology. Our team is dedicated to delivering top-quality
                products that not only solve problems, but also delight and
                engage users. We believe in the power of technology to change
                the world for the better, and we are committed to using our
                skills and expertise to make a positive impact. Our process is
                driven by a focus on collaboration and continuous improvement.
                We use agile methodologies to ensure that we are delivering the
                best possible products to our clients, and we are always looking
                for ways to optimize and streamline our processes. We are
                passionate about what we do, and we are always looking for new
                challenges and opportunities to grow and learn. If you share our
                vision and want to join us on this exciting journey, we would
                love to hear from you!
              </p>
              <p>
                <em>
                  I believe that we can make a real difference in the world
                  through code, and I am committed to tackling one problem at a
                  time. If you share this vision and want to chat and exchange
                  ideas, please dont hesitate to reach
                </em>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/realaliarain"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/realaliarain"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/aliarain"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/realaliarain"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:aliarain@raptr42.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                aliarain@raptr42.com
              </SocialLink>
              <SocialLink
                href="mailto:realaliarain@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                realaliarain@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
