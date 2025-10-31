import { useAtom } from "jotai";
import { FC, PropsWithChildren } from "react";

import { fromCoinAtom } from "@/state/coins";

import CoinInput from "../coin-input";

type FromCoinProps = {
  amount: number;
};

const FromCoin: FC<PropsWithChildren<FromCoinProps>> = ({ amount }) => {
  const coinAtom = useAtom(fromCoinAtom);
  const coin = coinAtom[0];

  return <CoinInput amount={amount} coin={coin} />;
};

export default FromCoin;
