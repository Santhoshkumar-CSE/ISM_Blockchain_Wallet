// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract DaiTokenMock is ERC20Mintable {
  string  public name;
  string  public symbol;
  uint256 public decimals;

  constructor() public {
    name = "Dai Stablecoin (DAI)";
    symbol = "DAI";
    decimals = 18;
  }
}
