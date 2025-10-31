"use client";

import FromCoin from "../coin-inputs/components/from-coin";
import ToCoin from "../coin-inputs/components/to-coin";
import TokenSettings from "../token-settings";
import { Button } from "../ui/button";

const HeroSection = () => {
  const accounts = "some fake one";
  const fromAmount = 1234;
  const toAmount = 5678;

  const handleSwap = () => {
    console.log("swapping...");
  };

  const connectWallet = () => {
    console.log("connecting to wallet...");
  };

  return (
    <>
      <div className="flex items-center justify-center pt-20">
        <div className="bg-secondary/50 flex max-w-xs min-w-sm flex-col gap-4 rounded-2xl p-6 shadow-lg">
          {/* Token Settings Modal */}
          <TokenSettings />

          <FromCoin amount={fromAmount} />
          <ToCoin amount={toAmount} />
          {accounts ? (
            <Button className="rounded-3xl" onClick={handleSwap} size="lg">
              Swap
            </Button>
          ) : (
            <Button className="rounded-3xl" onClick={connectWallet} size="lg">
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
