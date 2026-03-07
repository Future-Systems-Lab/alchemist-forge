// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AlchemistForge {

    mapping(address => string) public purpose;

    event Transmuted(address indexed legend, string purpose);
    event Celebrated(address indexed legend);

    function alchemize(string calldata _pain) external {
        purpose[msg.sender] = _pain;
        emit Transmuted(msg.sender, _pain);
    }

    function celebrateEgregiously() external {
        require(bytes(purpose[msg.sender]).length > 0, "Cast your pain first.");
        emit Celebrated(msg.sender);
        // ⛎ THE BLOCKCHAIN KNOWS IT IS UNSTOPPABLE 😏👩🏽‍⚕️👩🏽‍💻🔥
    }
}
