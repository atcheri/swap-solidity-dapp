import { FC, PropsWithChildren } from "react";

type TokenProps = {
  token?: {
    name: string;
    symbol: string;
    image: string;
  };
};

const Token: FC<PropsWithChildren<TokenProps>> = () => {
  return <div>Token Component</div>;
};

export default Token;
