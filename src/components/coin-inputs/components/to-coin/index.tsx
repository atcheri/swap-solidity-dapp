import { useAtom, useAtomValue } from "jotai";
import { FC, PropsWithChildren } from "react";

import { fromCoinAtom, toCoinAtom } from "@/state/coins";

import CoinInput from "../coin-input";

type ToCoinProps = {
  amount: number;
};

const ToCoin: FC<PropsWithChildren<ToCoinProps>> = ({ amount }) => {
  const coinAtom = useAtom(toCoinAtom);
  const coin = coinAtom[0];
  const onCoinSelect = coinAtom[1];
  const otherCoin = useAtomValue(fromCoinAtom);

  return <CoinInput amount={amount} coin={coin} otherCoin={otherCoin} onCoinSelect={onCoinSelect} />;
};

export default ToCoin;
