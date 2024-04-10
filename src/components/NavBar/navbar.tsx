"use client"

import * as React from "react"
import Link from "next/link"
import Image from 'next/image';
import exampleImage from '../../Assets/ben.jpeg';

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Weight Loss Program",
    href: "/docs/primitives/alert-dialog",
    description:
      "",
  },
  {
    title: "Muscle Gain Program",
    href: "/docs/primitives/hover-card",
    description:
      " ",
  },
  {
    title: "Weightlifting Program",
    href: "/docs/primitives/progress",
    description:
      "",
  },
  {
    title: "Powerlifting Program ",
    href: "/docs/primitives/scroll-area",
    description: "",
  },
  {
    title: "Gymanstics Program",
    href: "/docs/primitives/tabs",
    description:
      "",
  },
  {
    title: "General Fitness Program",
    href: "/docs/primitives/tooltip",
    description:
      "",
  },
]

export default function BenNav() {
  return (
    <NavigationMenu  >
      <NavigationMenuList className="ml-80 mt-10 ">
        <NavigationMenuItem >
          <NavigationMenuTrigger >ABOUT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >

                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src={exampleImage} alt="Example Image" width={500} height={300} />
                    </div>

                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="WHO AM I!">
                <a>Get to know more about me </a>

              </ListItem>
              <ListItem href="/docs/installation" title="WHAT I OFFER ">
                Be familiar with all services i offer
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="TESTIMONIES ">
                What clients says!
              </ListItem>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="flex justify-center" >TRAINING PROGRAMS</NavigationMenuTrigger>
          <NavigationMenuContent  >
            <ul className="grid w-[400px] gap3  md:w-[300px] md:grid-rows-2 lg:w-[200px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="place-items-end">FOLLOW ME</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid w-[400px] gap3  md:w-[300px] md:grid-rows -2 lg:w-[200px] p-4 ">
              <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" className="ml-10">
                Instagram
              </a>
              <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" className="mt-4 ml-10">
                Youtube
              </a>
              <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" className="mt-4 ml-10">
                Linked In
              </a>
              <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" className="mt-4 ml-10">
                Twitter
              </a>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              CONTACT
            </NavigationMenuLink>
          </Link>
          
        </NavigationMenuItem>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-10">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
      </NavigationMenuList>
     
    </NavigationMenu>

  )
  
}



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
