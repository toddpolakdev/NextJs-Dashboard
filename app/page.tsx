// import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-50 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <div className="flex gap-4">
          <Image
            src="/nodejs.png"
            width={200}
            height={100}
            className="hidden md:block"
            alt="nodejs"
            // layout="responsive"
          />
          {/* <Image
            src="/logo-git.png"
            width={100}
            height={60}
            className="hidden md:block"
            alt="git"
            layout="responsive"
          /> */}
          <Image
            src="/logo-postgresql.svg"
            width={100}
            height={60}
            className="hidden md:block"
            alt="postgresql"
          />
          <Image
            src="/vercel.svg"
            width={100}
            height={60}
            className="hidden md:block"
            alt="vercel"
          />
          <Image
            src="/tailwind.svg"
            width={200}
            height={100}
            className="hidden md:block"
            alt="tailwind"
          />
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* <div
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          /> */}
          {/* <div className={styles.shape}></div> */}
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to my site.</strong>
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base"
          >
            <span>Let's Go</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex-row items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="p-2">
            <span className="font-bold">
              Stuff I don't know. I don't know everything. ¯\_(ツ)_/¯ I don't
              know:
            </span>{' '}
            Java, C/C++. Ruby, Rust, Go, Kotlin, Swift, Dart, PHP, Perl, R, Lua,
            Azure, Kubernetes, Cypress
          </div>
          <div className="p-2">
            <span className="font-bold">I do know: </span>
            JavaScript, TypeScript, HTML, CSS, SQL, ReactJs, NextJs, NodeJs
            ExpressJs, PostgreSQL, TailwindCSS, MongoDB, MySQL, Jest
          </div>
          <div className="p-2">
            I am familiar with: Docker, AWS, Mocha, Chai, Figma
          </div>
          <div className="p-2">
            I'm currently learning: AWS, Builder io. I'm always learning.
          </div>

          {/* <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          /> */}
        </div>
      </div>
    </main>
  );
}
