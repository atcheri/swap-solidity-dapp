import { useAtom, useAtomValue } from "jotai";
import { FC, PropsWithChildren } from "react";

import { Coin } from "@/domain/models/coin";
import { fromCoinAtom, toCoinAtom } from "@/state/coins";

import CoinInput from "../coin-input";

type FromCoinProps = {
  amount: number;
};

const FromCoin: FC<PropsWithChildren<FromCoinProps>> = ({ amount }) => {
  const coinAtom = useAtom(fromCoinAtom);
  const coin = coinAtom[0];
  const onCoinSelect = coinAtom[1];
  const otherCoin = useAtomValue(toCoinAtom);

  return <CoinInput amount={amount} coin={coin} otherCoin={otherCoin} onCoinSelect={(c: Coin) => onCoinSelect(c)} />;
};

export default FromCoin;
