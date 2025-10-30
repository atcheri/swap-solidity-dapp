import { FC, PropsWithChildren } from "react";

import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { Item, ItemContent, ItemDescription } from "../ui/item";

type ModalProps = {
  connectWallet: () => void;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({ connectWallet }) => {
  const walletMenu = ["MetaMask", "WalletConnect", "Coinbase", "Wallet"];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Address</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect a Wallet</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {walletMenu.map((wallet, index) => (
          <Button variant="outline" key={index} onClick={() => connectWallet()}>
            {wallet}
          </Button>
        ))}
        <Item variant="outline">
          <ItemContent>
            <ItemDescription>
              By connecting a wallet, you agree to SwapClone Terms of Service and consent to its Privacy Policy
            </ItemDescription>
          </ItemContent>
        </Item>
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

export default Modal;
