import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex flex-col gap-[25px] justify-center items-center grow max-lg:px-5 max-lg:pt-8 max-lg:pb-6 max-lg:gap-[18px]">
        <div className="relative">
          <img
            src={heroImg}
            className="relative z-0 mx-auto w-[170px]"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 mx-auto z-10 top-[34px] h-7 [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 mx-auto z-0 top-[107px] h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="font-mono inline-flex rounded border-2 border-transparent px-2.5 py-[5px] text-base text-[var(--accent)] bg-[var(--accent-bg)] transition-[border-color] duration-300 mb-6 cursor-pointer hover:border-[var(--accent-border)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks" />

      <section className="flex border-t border-[var(--border)] text-left max-lg:flex-col max-lg:text-center">
        <div className="flex-1 p-8 border-r border-[var(--border)] max-lg:p-5 max-lg:border-r-0 max-lg:border-b max-lg:border-b-[var(--border)]">
          <svg className="mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon" />
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 mt-8 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-[1_1_calc(50%-4px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-[6px] bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-4px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-[6px] bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="flex-1 p-8 max-lg:p-5">
          <svg className="mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon" />
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 mt-8 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-[1_1_calc(50%-4px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-[6px] bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon" />
                </svg>
                GitHub
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-4px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-[6px] bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon" />
                </svg>
                Discord
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-4px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-[6px] bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon" />
                </svg>
                X.com
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-4px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="text-[var(--text-h)] text-base rounded-[6px] bg-[var(--social-bg)] flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow duration-300 hover:shadow-[var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon" />
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks" />
      <section className="h-[88px] border-t border-[var(--border)] max-lg:h-12" />
    </>
  )
}

export default App
