"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Elegance Studio', href: '/Elegance-Studio' },
    { name: 'Pre-Ceremony Portraits', href: '/Pre-Ceremony-Portraits' },
    { name: 'Engagement Storytellers', href: '/Engagement-Storytellers' },
    { name: 'Union Storytellers', href: '/Union-Storytellers' },
    { name: 'Contact Us', href: '/Contact-Us' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const pathname = usePathname()
    console.log("pathname", pathname)

    return (
        <Disclosure as="nav" className="bg-white z-50 absolute w-full">
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                        <div className="flex shrink-0 items-center text-gray-900">
                            Sagar Films Logo
                            {/* <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            /> */}
                        </div>

                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden lg:ml-6 lg:block">
                            <div className="flex space-x-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            pathname == item.href ? 'text-cyan-500' : 'text-gray-900 hover:text-cyan-400',
                                            'rounded-md px-3 py-2 cursor-pointer text-sm font-semibold',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                pathname == item.href ? 'text-cyan-500' : 'text-gray-900 hover:text-cyan-400',
                                'block rounded-md cursor-pointer px-3 py-2 text-sm font-semibold',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}