import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function Home() {
   return (
      <Popover className={"container mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>
      <h1 className="font-bold">Ethan Ghere</h1>

      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>

      <div className="flex grow items-center justify-end sm:hidden">
        <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <PopoverPanel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Ethan Ghere</h1>
                <div className="-mr-2">
                  <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open Menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link className="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2" href="/">Home</Link>
                  <Link className="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2" href="#portfolio">Portfolio</Link>
                  <Link className="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2" href="#blog">Blog</Link>
                  <Link className="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2" href="#resume">Resume</Link>
                  <Link className="focus:outline-none focus:ring-inset focus:ring-gray-500 px-2" href="#contact">Contact</Link>
                </nav>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>

      <div className="hidden sm:block">
        <Link href="#placeholder">Dark/Light</Link>
      </div>
    </Popover>
   )
}