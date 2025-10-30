"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import images from "@/assets";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Modal from "../modal";
import ThemeToggle from "../theme-provider/theme-toggle";
import TokenList from "../token-list";

const Navbar = () => {
  const items = [
    { name: "Swap", link: "/" },
    { name: "Tokens", link: "/tokens" },
    { name: "Pools", link: "/pools" },
  ];

  return (
    <nav className="bg-background border-border flex w-full items-center justify-between border-b px-6 py-4">
      {/* Logo and Navigation Items */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <Image src={images.uniswap} alt="Logo" width={40} height={40} className="cursor-pointer" />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {items.map((item, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={item.link}>{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Search Bar */}
      <div className="mx-4 hidden max-w-md flex-1 lg:block">
        <div className="relative flex items-center">
          <Search className="text-muted-foreground absolute left-3 z-10 h-4 w-4" />
          <Input type="text" placeholder="Search Tokens" className="bg-secondary/50 w-full rounded-xl pl-10" />
        </div>
      </div>

      {/* Network and Address */}
      <div className="flex items-center gap-3">
        <button className="bg-secondary/50 hover:bg-secondary border-border hidden items-center gap-2 rounded-xl border px-4 py-2 transition-colors sm:flex">
          <Image src={images.ether} alt="Network" width={20} height={20} />
          <span className="text-sm font-medium">Network Name</span>
        </button>

        <ThemeToggle />

        {/* Address Modal */}
        <Modal
          connectWallet={() => {
            console.log("connecting to wallet...");
          }}
        />

        {/* Token List */}
        <TokenList tokenData="data" />
      </div>
    </nav>
  );
};

export default Navbar;
