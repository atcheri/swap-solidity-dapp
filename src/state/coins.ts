import { atom } from "jotai";

import { ethCoin, usdtCoin } from "@/data/coins";
import { Coin } from "@/domain/models/coin";

export const fromCoinAtom = atom<Coin>(ethCoin);
export const toCoinAtom = atom<Coin>(usdtCoin);
