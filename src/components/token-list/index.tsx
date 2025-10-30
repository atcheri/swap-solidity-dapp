import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

type TokenListProps = {
  setIsTokenBoxOpened: Dispatch<SetStateAction<boolean>>;
  tokenData: string;
};

const TokenList: FC<PropsWithChildren<TokenListProps>> = () => {
  return <div>Token List</div>;
};

export default TokenList;
