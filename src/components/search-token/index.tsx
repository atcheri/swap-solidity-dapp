import { FC, PropsWithChildren } from "react";

type SearchTokenProps = {
  token?: {
    name: string;
    symbol: string;
    image: string;
  };
};

const SearchToken: FC<PropsWithChildren<SearchTokenProps>> = () => {
  return <div>Search Token</div>;
};

export default SearchToken;
