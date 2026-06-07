"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Elegance Studio', href: '/Elegance-Studio' },
    { name: 'Pre-Wedding', href: '/Pre-Wedding' },
    { name: 'Candids', href: '/Candids' },
    { name: 'Wedding-Films', href: '/Wedding-Films' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 glassmorphism border-b border-gray-100/50 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-amber-600 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo & Brand Name */}
                    <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                        <Link href="/" className="flex shrink-0 items-center gap-3 cursor-pointer group">
                            <img
                                alt="Sagar Films Logo"
                                src="/images/fevicon.jpeg"
                                className="h-10 w-10 rounded-lg border border-amber-500/20 object-contain bg-white shadow-sm group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="text-xl font-medium tracking-widest text-[#121212] font-serif-luxury group-hover:text-amber-600 transition-colors duration-300">
                                SAGAR FILMS
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu Links */}
                    <div className="hidden lg:flex lg:items-center">
                        <div className="flex space-x-8">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            isActive 
                                                ? 'text-[#c5a880]' 
                                                : 'text-gray-700 hover:text-[#c5a880]',
                                            'relative py-2 text-[13px] tracking-widest uppercase font-semibold transition-colors duration-300 cursor-pointer group'
                                        )}
                                    >
                                        {item.name}
                                        {/* Underline slide effect */}
                                        <span className={classNames(
                                            'absolute bottom-0 left-0 w-full h-[1.5px] bg-[#c5a880] transform origin-left transition-transform duration-300',
                                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        )} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Panel */}
            <DisclosurePanel className="lg:hidden bg-white/95 border-b border-gray-100 animate-scale-in origin-top">
                <div className="space-y-1 px-4 pb-6 pt-3 shadow-inner">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    isActive 
                                        ? 'text-[#c5a880] bg-amber-50/50' 
                                        : 'text-gray-800 hover:text-[#c5a880] hover:bg-gray-50',
                                    'block rounded-md px-3 py-3 text-sm tracking-wider uppercase font-semibold cursor-pointer transition-all duration-300'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        );
                    })}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}