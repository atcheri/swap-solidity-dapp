import { describe } from "node:test";

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

export const ethCoin: Coin = {
  name: "Ethereum",
  description:
    "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.",
  symbol: "ETH",
  Icon: TokenETH,
};

export const usdtCoin: Coin = {
  name: "USDT",
  description:
    "Launched in 2014, Tether is a blockchain-enabled platform designed to facilitate the use of fiat currencies in a digital manner. Tether works to disrupt the conventional financial system via a more modern approach to money. Tether has made headway by giving customers the ability to transact with traditional currencies across the blockchain, without the inherent volatility and complexity typically associated with a digital currency. As the first blockchain-enabled platform to facilitate the digital use of traditional currencies (a familiar, stable accounting unit), Tether has democratised cross-border transactions across the blockchain.",
  symbol: "USDT",
  Icon: TokenUSDT,
};

export const coins: Coin[] = [
  {
    name: "Pax Gold",
    description:
      "Pax Gold (PAXG) is a gold-backed cryptocurrency, launched by the creators of Paxos Standard (PAX) in September 2019. As an ERC-20 token operating on the Ethereum blockchain, Pax Gold is tradeable on a large variety of exchanges and has become an accessible way for traders to start investing in gold.",
    symbol: "PAXG",
    Icon: TokenPAXG,
  },
  {
    name: "Solana",
    description:
      "Solana is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland.",
    symbol: "SOL",
    Icon: TokenSOLANA,
  },
  ethCoin,
  {
    name: "Dai",
    description:
      "DAI is an Ethereum-based stablecoin (stable-price cryptocurrency) whose issuance and development is managed by the Maker Protocol and the MakerDAO decentralized autonomous organization.",
    symbol: "DAI",
    Icon: TokenDAI,
  },
  {
    name: "Uniswap",
    description:
      "Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens.",
    symbol: "UNI",
    Icon: TokenUNISWAP,
  },
  usdtCoin,
  {
    name: "USDC",
    description:
      "USDC is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.",
    symbol: "USDC",
    Icon: TokenUSDC,
  },
  {
    name: "Dogecoin",
    description:
      'Dogecoin (DOGE) is based on the popular "doge" Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin\'s creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme. Tesla CEO Elon Musk posted several tweets on social media that Dogecoin is his favorite coin.',
    symbol: "DOGE",
    Icon: TokenDOGE,
  },
  {
    name: "Chainlink",
    description:
      "Founded in 2017, Chainlink is the industry-standard oracle platform bringing the capital markets onchain and powering the majority of decentralized finance (DeFi). Chainlink stands to benefit the most from emerging blockchain-industry trends, such as stablecoin adoption, real-world asset tokenization, and institutional adoption of blockchain technology. Chainlink is powered by the LINK token, which is used to pay for platform services and secure the network’s proper functioning. Chainlink leverages a novel fee model where offchain and onchain revenue from enterprise adoption is converted to LINK tokens and stored in a strategic Chainlink Reserve.",
    symbol: "LINK",
    Icon: TokenLINK,
  },
];
