import { useAtom } from "jotai";
import { FC, PropsWithChildren } from "react";

import { Coin } from "@/domain/models/coin";
import { fromCoinAtom } from "@/state/coins";

import CoinInput from "../coin-input";

type FromCoinProps = {
  amount: number;
};

const FromCoin: FC<PropsWithChildren<FromCoinProps>> = ({ amount }) => {
  const coinAtom = useAtom(fromCoinAtom);
  const coin = coinAtom[0];
  const onCoinSelect = coinAtom[1];

  return <CoinInput amount={amount} coin={coin} onCoinSelect={(c: Coin) => onCoinSelect(c)} />;
};

export default FromCoin;
