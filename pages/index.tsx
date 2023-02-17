import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'
import { Inter, Source_Sans_Pro, Roboto_Mono } from '@next/font/google'
import styles from '@/styles/Index.module.css'
import avatarSrc from '@/public/avatar.png'
import { useLayoutEffect, useState } from 'react'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const sourceSansProLight = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '200'
});
const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '400'
});
const robotoMonoLight = Roboto_Mono({
  subsets: ['latin'],
  weight: '200'
});

const Tag = ({ children }: { children: any; }) => (
  <span className="inline-block mr-3">{children}</span>
)

const ANIMATION_DELAY = 500;
export default function Home() {
  const [isAnimatingHeader, setIsAnimatingHeader] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsAnimatingHeader(false);
    }, ANIMATION_DELAY);
  }, []);
  return (
    <>
      <Head>
        <title>Amy Hua</title>
        <meta name="description" content="Amy Hua's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-3xl">
        <div className="max-w-lg flex flex-col justify-between min-h-screen">
          <header className="p-10">
            <h1 className={classNames(
              robotoMonoLight.className,
              "text-5xl sm:text-4xl m-0 tracking-wide mt-14 text-bread",
              styles.typing,
              isAnimatingHeader && styles.revealing,
            )}>
              Amy Hua
            </h1>
            <div className={classNames(
              "my-6 text-2xl sm:text-xl pt-4 sm:pr-2 box-border",
              sourceSansProLight.className,
            )}>
              <div className="my-6">
                Hi! {`👋`}
              </div>
              <div className="my-6">
                I'm a frontend-focused full-stack engineer with over 10 years of experience in tech.
              </div>
              <div className="mt-6 mb-6 pr-6">
                As a hybrid designer / developer, I like to build elegant and useful experiences for the web.
              </div>
            </div>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSk0JENkjv2SfFM9dKJWozcl4958CIHz7FlHnogHFseAb5v3Zcz0RqPwAIVmO95-VUjCCDy-pQwyqlw/pub"
              rel="noreferrer"
              target="_blank"
              className={classNames(
                "mt-9 flex items-center group cursor-pointer p-3 rounded-lg bg-gray-50 hover:bg-gray-100",
                sourceSansPro.className,
              )}>
              <span className="align-middle">📄</span> <span className="text-lg sm:text-base inline-block text-black ml-2">Resume</span>
            </a>
            <div className={classNames(
              "py-3 my-3 text-gray-800 text-lg sm:text-base",
              sourceSansPro.className,
            )}>
              <div className="w-6 border-b border-b-gray-800 my-3" />
              <div className="text-bread">
                {
                  ['#js', '#react', '#node', '#html', '#css', '#sql', '#python', '#ruby', '#ror', '#d3js', '#webgl']
                  .map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))
                }
              </div>
            </div>
          </header>
          <footer className="px-10 py-6">
            <div className="flex">
              <div>
                <Image
                  src={avatarSrc}
                  alt="Avatar"
                  width={50}
                  height={50}
                  priority
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 flex items-center px-4 text-base">
                <ul className="flex justify-evenly cursor-pointer">
                  <li className="px-3 text-gray-600 hover:text-black transition-colors">
                    <a href="//linkedin.com/in/huaamy" target="_blank" rel="noreferrer">LinkedIn</a>
                  </li>
                  <li className="px-3 text-gray-600 hover:text-black transition-colors">
                  <a href="//github.com/amyhua" target="_blank" rel="noreferrer">Github</a>
                  </li>
                  <li className="px-3 text-gray-600 hover:text-black transition-colors">
                  <a href="//mailto:foramyhua@gmail.com" target="_blank" rel="noreferrer">Email</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </main>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  )
}
