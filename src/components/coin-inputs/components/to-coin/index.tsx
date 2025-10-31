import { useAtom } from "jotai";
import { FC, PropsWithChildren } from "react";

import { toCoinAtom } from "@/state/coins";

import CoinInput from "../coin-input";

type ToCoinProps = {
  amount: number;
};

const ToCoin: FC<PropsWithChildren<ToCoinProps>> = ({ amount }) => {
  const coinAtom = useAtom(toCoinAtom);
  const coin = coinAtom[0];

  return <CoinInput amount={amount} coin={coin} />;
};

export default ToCoin;
