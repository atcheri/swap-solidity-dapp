import { IconComponentProps } from "@web3icons/react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Coin = {
  name: string;
  symbol: string;
  Icon: ForwardRefExoticComponent<Omit<IconComponentProps, "ref"> & RefAttributes<SVGSVGElement>>;
};
