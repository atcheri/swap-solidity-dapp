import { FC, PropsWithChildren, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Item, ItemContent, ItemDescription } from "@/components/ui/item";
import { Coin } from "@/domain/models/coin";

type SearchTokenProps = {
  coin: Coin;
  coins: Coin[];
  otherCoin: Coin;
  onCoinSelect: (coin: Coin) => void;
};

const SearchToken: FC<PropsWithChildren<SearchTokenProps>> = ({ children, coin, coins, otherCoin, onCoinSelect }) => {
  const [selectedCoin, setSelectedCoin] = useState<Coin>(coin || coins[0]);

  const handleSelectedCoin = (coin: Coin) => {
    setSelectedCoin(coin);
  };

  const handleValidate = () => {
    onCoinSelect(selectedCoin);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select a Token</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-wrap gap-2">
          {coins.map((c, index) => {
            const isCurrentCoin = c.symbol === selectedCoin.symbol;
            const disabled = c.symbol === otherCoin.symbol;

            return (
              <Button
                className="min-w-28"
                variant={isCurrentCoin ? "default" : "outline"}
                key={index}
                disabled={disabled}
                onClick={() => handleSelectedCoin(c)}
              >
                <c.Icon width={16} height={16} className="mr-2" />
                {c.symbol}
              </Button>
            );
          })}
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
          <DialogClose asChild>
            <Button onClick={handleValidate} type="button">
              Validate
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchToken;
