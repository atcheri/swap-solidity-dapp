import { LockIcon, PercentIcon, SettingsIcon } from "lucide-react";
import { FC, PropsWithChildren, useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "../ui/item";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

type TokenSettingsProps = {
  token?: {
    name: string;
    symbol: string;
    image: string;
  };
};
const TokenSettings: FC<PropsWithChildren<TokenSettingsProps>> = ({ token }) => {
  const [isDeadLineActive, setIsDeadLineActive] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="self-end rounded-full">
          <SettingsIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Token Settings</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <span>Slipage tolerance</span>
          <LockIcon size={16} />
        </div>
        <div className="flex w-full max-w-sm items-center">
          <InputGroup>
            <InputGroupInput placeholder="10.00" type="number" min={0} />
            <InputGroupAddon align="inline-end">
              <InputGroupAddon>
                <PercentIcon />
              </InputGroupAddon>
            </InputGroupAddon>
          </InputGroup>
          <Button>Auto</Button>
        </div>
        <div className="flex items-center justify-between">
          <span>Slipage tolerance</span>
          <LockIcon size={16} />
        </div>
        <div className="flex w-full max-w-sm items-center">
          <InputGroup>
            <InputGroupInput placeholder="30" type="number" min={0} />
          </InputGroup>
          <Button>Minutes</Button>
        </div>
        <Item>
          <ItemContent>
            <ItemTitle>Interface Settings</ItemTitle>
            <ItemDescription>
              <Label htmlFor="deadline">Transaction deadline Active: {isDeadLineActive ? "Yes" : "No"}</Label>
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Switch id="deadline" onClick={() => setIsDeadLineActive((prev) => !prev)} />
          </ItemActions>
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

export default TokenSettings;
