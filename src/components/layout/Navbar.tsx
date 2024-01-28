"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Github, MoonIcon, SunIcon, UtensilsCrossed } from "lucide-react";
function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="m-2 p-2 shadow-sm">
      <section className="flex justify-between m-2">
        {/* Logo */}
        <article>
          <Link
            href={"/"}
            className="text-3xl font-bold flex justify-center items-center space-x-4"
          >
            <UtensilsCrossed width={50} height={50} />
            <p>Melp Business</p>
          </Link>
        </article>
        {/* Button Link and DarkMode */}
        <article className="flex flex-row items-center justify-center gap-2">
          <Link href={"https://github.com/DubstepQBA/test"}>
            <Button variant="outline" size="icon">
              <Github />
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </article>
      </section>
    </nav>
  );
}

export default Navbar;
