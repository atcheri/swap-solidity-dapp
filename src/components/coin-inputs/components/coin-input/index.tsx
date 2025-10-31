import { ChevronDownIcon } from "lucide-react";
import { FC, PropsWithChildren, useState } from "react";

import SearchToken from "@/components/search-token";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Coin } from "@/domain/models/coin";

type CoinInputProps = {
  amount: number;
  coin: Coin;
};

const CoinInput: FC<PropsWithChildren<CoinInputProps>> = ({ amount, coin }) => {
  const [isTokenFromOpened, setIsTokenFromOpened] = useState(false);

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
          <Button onClick={() => setIsTokenFromOpened((p) => !p)} size="lg" variant="outline">
            <coin.Icon width={16} height={16} />
            {coin.symbol}
            <ChevronDownIcon width={16} height={16} />
          </Button>
        </ItemActions>
      </Item>
      {/* Token From Modal */}
      {isTokenFromOpened && (
        <SearchToken
        // token={}
        // isTokenFromOpened={isTokenFromOpened}
        // setIsTokenFromOpened={setIsTokenFromOpened}
        // setTokenFrom={setTokenFrom}
        />
      )}
    </>
  );
};

export default CoinInput;
