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
import TokenList from "../token-list";

const Navbar = () => {
  const items = [
    { name: "Swap", link: "/" },
    { name: "Tokens", link: "/tokens" },
    { name: "Pools", link: "/pools" },
  ];

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isTokenBoxOpened, setIsTokenBoxOpened] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-background border-b border-border">
      {/* Logo and Navigation Items */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src={images.uniswap}
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
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
      <div className="flex-1 max-w-md mx-4 hidden lg:block">
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground z-10" />
          <Input
            type="text"
            placeholder="Search Tokens"
            className="w-full pl-10 rounded-xl bg-secondary/50"
          />
        </div>
      </div>

      {/* Network and Address */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors border border-border">
          <Image src={images.ether} alt="Network" width={20} height={20} />
          <span className="text-sm font-medium">Network Name</span>
        </button>

        <button
          onClick={() => setIsModalOpened(true)}
          className="flex items-center px-4 py-2 bg-accent hover:bg-accent/80 rounded-xl transition-colors text-sm font-medium border border-border"
        >
          Address
        </button>
      </div>

      {/* Modals */}
      {isModalOpened && (
        <Modal setIsModalOpened={setIsModalOpened} connectWallet="Connect" />
      )}

      {isTokenBoxOpened && (
        <TokenList setIsTokenBoxOpened={setIsTokenBoxOpened} tokenData="data" />
      )}
    </nav>
  );
};

export default Navbar;
