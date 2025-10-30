import { BitcoinIcon } from "lucide-react";
import { FC, PropsWithChildren } from "react";

import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item";
import { Separator } from "../ui/separator";

type TokenListProps = {
  tokenData: string;
};

const TokenList: FC<PropsWithChildren<TokenListProps>> = () => {
  const tokeItems = [1, 2, 3, 4];

  return (
    <Dialog>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect a Wallet</DialogTitle>
        </DialogHeader>
        {tokeItems.map((token, index) => (
          <div key={`token-item-${index}`}>
            <Item>
              <ItemMedia variant="icon">
                <BitcoinIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Token Name</ItemTitle>
                <ItemDescription>Token amount</ItemDescription>
              </ItemContent>
            </Item>
            <Separator />
          </div>
        ))}
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

export default TokenList;
