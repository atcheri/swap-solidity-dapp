"use client";

import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import images from "@/assets";

import SearchToken from "../search-token";
import TokenSettings from "../token-settings";
import { Button } from "../ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item";

const HeroSection = () => {
  const accounts = "some fake one";
  const fromAmount = 1234;
  const toAmount = 5678;
  const [isSettingOpened, setIsSettingOpened] = useState(false);
  const [isTokenFromOpened, setIsTokenFromOpened] = useState(false);
  const [isTokenToOpened, setIsTokenToOpened] = useState(false);

  const connectWallet = () => {
    console.log("connecting to wallet...");
  };

  // First from
  const [tokenFrom, setTokenFrom] = useState({
    name: "Ethereum",
    symbol: "ETH",
    image: "",
  });
  // Then to
  const [tokenTo, setTokenTo] = useState({
    name: "Uniswap",
    symbol: "UNI",
    image: "",
  });

  return (
    <>
      <div className="flex items-center justify-center pt-20">
        <div className="bg-secondary/50 flex max-w-xs min-w-sm flex-col gap-4 rounded-2xl p-6 shadow-lg">
          {/* Token Settings Modal */}
          <TokenSettings />

          <Item variant="outline">
            <ItemMedia>
              <Image
                src={tokenFrom.image || images.etherlogo}
                alt={tokenFrom.name}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{tokenFrom.name}</ItemTitle>
              <ItemDescription>
                {fromAmount} {tokenFrom.symbol}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Invite
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia>
              <Image
                src={tokenFrom.image || images.etherlogo}
                alt={tokenFrom.name}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{tokenFrom.name}</ItemTitle>
              <ItemDescription>
                {toAmount} {tokenTo.symbol}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button onClick={() => setIsTokenFromOpened(true)} size="sm" variant="outline"></Button>
            </ItemActions>
          </Item>
          {accounts ? (
            <Button className="rounded-3xl" onClick={() => {}} size="lg">
              Swap
            </Button>
          ) : (
            <Button className="rounded-3xl" onClick={connectWallet} size="lg">
              Connect Wallet
            </Button>
          )}
        </div>
      </div>

      {/* Token From Modal */}
      {isTokenFromOpened && (
        <SearchToken
          token={tokenFrom}
          // isTokenFromOpened={isTokenFromOpened}
          // setIsTokenFromOpened={setIsTokenFromOpened}
          // setTokenFrom={setTokenFrom}
        />
      )}
      {/* Token To Modal */}
      {isTokenToOpened && (
        <SearchToken
          token={tokenTo}
          // isTokenToOpened={isTokenToOpened}
          // setIsTokenToOpened={setIsTokenToOpened}
          // setTokenTo={setTokenTo}
        />
      )}
    </>
  );
};

export default HeroSection;
