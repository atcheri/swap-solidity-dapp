// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {SwapToken} from "./SwapToken.sol";
import {Test} from "forge-std/Test.sol";

contract SwapTokenTest is Test {
  SwapToken swapToken;

  function setUp() public {
    swapToken = new SwapToken();
  }

  function test_InitialValue() public view {
    require(swapToken.x() == 0, "Initial value should be 0");
  }

  function testFuzz_Inc(uint8 x) public {
    for (uint8 i = 0; i < x; i++) {
      swapToken.inc();
    }
    require(swapToken.x() == x, "Value after calling inc x times should be x");
  }

  function test_IncByZero() public {
    vm.expectRevert();
    swapToken.incBy(0);
  }
}
