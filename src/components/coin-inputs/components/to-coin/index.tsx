import { FC, PropsWithChildren } from "react";

import { Coin } from "@/domain/models/coin";

import CoinInput from "../coin-input";

type ToCoinProps = {
  amount: number;
  coin: Coin;
};

const ToCoin: FC<PropsWithChildren<ToCoinProps>> = ({ amount, coin }) => {
  return <CoinInput amount={amount} coin={coin} />;
};

export default ToCoin;
