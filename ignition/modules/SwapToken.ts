import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SwapTokenModule", (m) => {
  const swapToken = m.contract("SwapToken");

  m.call(swapToken, "incBy", [5n]);

  return { swapToken };
});
