'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import GitHubIcon from '@/icons/github'
import AnimationCards from '@/showcase/ui-group/AnimationCards'
import ComponentCards from '@/showcase/ui-group/ComponentCards'
import BlockCards from '@/showcase/ui-group/BlockCards'
import EffectCards from '@/showcase/ui-group/EffectCards'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-between text-center">
        <Header />
        <div className="my-[8rem] flex h-full flex-col items-center justify-center gap-4 px-3">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Image
              src="/images/SyntaxUi.svg"
              alt="SyntaxUi Clone"
              className="mb-4 h-16 w-16 rounded-lg"
              width={100}
              height={100}
            />
            <span className="max-w-lg text-3xl font-bold tracking-tight md:max-w-2xl md:text-5xl">
              A UI library Clone, <br /> inspired by Syntax UI.
            </span>
            <div className="text-gray-600 dark:text-gray-300">
              Free-to-use UI elements designed for rapid development.
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/components">
              <Button className="hover:bg-red-500/90 dark:hover:bg-red-500/90 bg-red-500 dark:bg-red-500 dark:text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        {/* UI Elements */}
        <div className="mb-12 flex w-full max-w-7xl flex-col gap-8 px-3">
          <div>
            <h1 className="mb-4 text-left text-lg font-semibold tracking-tight">
              Components
            </h1>
            <ComponentCards />
          </div>
          <div>
            <h1 className="mb-4 text-left text-lg font-semibold tracking-tight">
              Blocks
            </h1>
            <BlockCards />
          </div>
          <div>
            <h1 className="mb-4 text-left text-lg font-semibold tracking-tight">
              Animations
            </h1>
            <AnimationCards />
          </div>
          <div>
            <h1 className="mb-4 w-full text-left text-lg font-semibold">
              Effects
            </h1>
            <EffectCards />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
