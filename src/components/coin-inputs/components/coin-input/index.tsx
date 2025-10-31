import { ChevronDownIcon } from "lucide-react";
import { FC, PropsWithChildren, useState } from "react";

import SearchToken from "@/components/search-token";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { coins } from "@/data/coins";
import { Coin } from "@/domain/models/coin";

type CoinInputProps = {
  amount: number;
  coin: Coin;
  otherCoin: Coin;
  onCoinSelect: (coin: Coin) => void;
};

const CoinInput: FC<PropsWithChildren<CoinInputProps>> = ({ amount, coin, otherCoin, onCoinSelect }) => {
  return (
    <>
      <Item variant="outline">
        <ItemMedia>
          <coin.Icon width={32} height={32} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{coin.name}</ItemTitle>
          <ItemDescription>
            {amount} {coin.symbol}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <SearchToken
            coin={coin}
            coins={coins}
            otherCoin={otherCoin}
            onCoinSelect={onCoinSelect}
            // token={}
            // isTokenFromOpened={isTokenFromOpened}
            // setIsTokenFromOpened={setIsTokenFromOpened}
            // setTokenFrom={setTokenFrom}
          >
            <Button size="lg" variant="outline">
              <coin.Icon width={16} height={16} />
              {coin.symbol}
              <ChevronDownIcon width={16} height={16} />
            </Button>
          </SearchToken>
        </ItemActions>
      </Item>
      {/* Token From Modal */}
    </>
  );
};

export default CoinInput;
