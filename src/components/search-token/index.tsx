import { FC, PropsWithChildren, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Item, ItemContent, ItemDescription } from "@/components/ui/item";
import { Coin } from "@/domain/models/coin";

type SearchTokenProps = {
  coins: Coin[];
};

const SearchToken: FC<PropsWithChildren<SearchTokenProps>> = ({ children, coins }) => {
  const [selectedCoin, setSelectedCoin] = useState<Coin>(coins[0]);

  const handleSelectedCoin = (coin: Coin) => {
    setSelectedCoin(coin);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select a Token</DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-2">
          {coins.map((coin, index) => (
            <Button className="min-w-28" variant="outline" key={index} onClick={() => handleSelectedCoin(coin)}>
              <coin.Icon width={16} height={16} className="mr-2" />
              {coin.symbol}
            </Button>
          ))}
        </div>
        {selectedCoin.description && (
          <Item variant="outline">
            <ItemContent>
              <ItemDescription>{selectedCoin.description}</ItemDescription>
            </ItemContent>
          </Item>
        )}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchToken;
