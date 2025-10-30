"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import images from "@/assets";

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
    <nav className="">
      <Image src={images.uniswap} alt="Logo" width={50} height={50} />
      <div className="">
        {items.map((item, i) => (
          <Link
            key={i + 1}
            href={{ pathname: `${item.name}`, query: `${item.link}` }}
          />
        ))}
      </div>
      <div className="">
        <Image src={images.search} alt="search" width={20} height={20} />
        <input type="text" placeholder="search tokens" />
      </div>
      <div className="">
        <Image src={images.ether} alt="eth" width={30} height={30} />
        <button onClick={() => {}}>Address</button>
      </div>

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
