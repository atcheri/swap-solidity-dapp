import { FC, PropsWithChildren } from "react";

import { Coin } from "@/domain/models/coin";

import CoinInput from "../coin-input";

type FromCoinProps = {
  amount: number;
  coin: Coin;
};

const FromCoin: FC<PropsWithChildren<FromCoinProps>> = ({ amount, coin }) => {
  return <CoinInput amount={amount} coin={coin} />;
};

export default FromCoin;
