import { BitcoinIcon } from "lucide-react";
import { FC, PropsWithChildren } from "react";

import { coins } from "@/data/coins";

import { Button } from "../ui/button";

type SearchTokenProps = {
  token?: {
    name: string;
    symbol: string;
    image: string;
  };
};

const SearchToken: FC<PropsWithChildren<SearchTokenProps>> = () => {
  return (
    <div>
      Select a Token
      {coins.map(({ symbol, Icon }, index) => (
        <Button key={index} variant="outline" size="sm">
          {Icon ? <Icon width={32} height={32} /> : <BitcoinIcon width={32} height={32} />}
          {symbol}
        </Button>
      ))}
    </div>
  );
};

export default SearchToken;
