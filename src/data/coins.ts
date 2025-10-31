import {
  TokenDAI,
  TokenDOGE,
  TokenETH,
  TokenLINK,
  TokenPAXG,
  TokenSOLANA,
  TokenUNISWAP,
  TokenUSDC,
  TokenUSDT,
} from "@web3icons/react";

import { Coin } from "@/domain/models/coin";

export const ethCoin = {
  name: "Ethereum",
  symbol: "ETH",
  Icon: TokenETH,
};

export const usdtCoin = {
  name: "USDT",
  symbol: "USDT",
  Icon: TokenUSDT,
};

export const coins: Coin[] = [
  {
    name: "Pax Gold",
    symbol: "PAXG",
    Icon: TokenPAXG,
  },
  {
    name: "Solana",
    symbol: "SOL",
    Icon: TokenSOLANA,
  },
  ethCoin,
  {
    name: "XDai",
    symbol: "DAI",
    Icon: TokenDAI,
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    Icon: TokenUNISWAP,
  },
  usdtCoin,
  {
    name: "usdc",
    symbol: "usdc",
    Icon: TokenUSDC,
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    Icon: TokenDOGE,
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    Icon: TokenLINK,
  },
];
