# AlchemistForge ⛎🔥

Patent Pending — U.S. Provisional Application No. 64/063,037 (filed May 2026)

**Transmuting pain into purpose on the blockchain**

A smart contract that combines digital psychology with blockchain technology—helping you reprogram limiting beliefs while learning cryptocurrency through something deeply meaningful.

## The Concept

We all carry limiting beliefs that prevent us from living to our full potential. AlchemistForge lets you permanently record your transformation from pain to purpose on the Ethereum blockchain.

This isn't just therapy—it's a ritual. Your transformation is witnessed by thousands of computers worldwide, immutable and permanent.

## Quick Start

1. **Get Brave Browser** -- Download from [brave.com](https://brave.com/download), enable Brave Wallet in settings
2. **Switch to Sepolia** -- Open Brave Wallet → networks → add Sepolia testnet
3. **Get test ETH** -- Use a [Sepolia faucet](https://sepoliafaucet.com) to get free test ETH
4. **Open AlchemistForge** -- Go to [alchemistforge.io](https://alchemistforge.io)
5. **Connect wallet** -- Click "Connect Wallet" and approve in Brave Wallet
6. **Name your shadow** -- Type the aspect you're integrating
7. **Alchemize** -- Submit the transaction to record it on-chain permanently

**Contract Address (Sepolia):** `0xE092336F8f5082e57CcBb341A110C20ad186A324`

**Live dApp:** [alchemistforge.io](https://alchemistforge.io)

**Verify on-chain:** [Sepolia Etherscan](https://sepolia.etherscan.io/address/0xE092336F8f5082e57CcBb341A110C20ad186A324)

## Featured

📰 **[Reprogram Your Limiting Beliefs on the Blockchain While Learning Web3](https://www.americaoutloud.news/reprogram-your-limiting-beliefs-on-the-blockchain-while-learning-web3/)** — *America Out Loud, April 2026*

📰 **[Why Your Medical Record Belongs in Your Digital Wallet](https://www.americaoutloud.news/why-your-medical-record-belongs-in-your-digital-wallet/)** — *America Out Loud, April 2026*

Part of the `mental-health-on-chain` public smart contract awareness series. Case Study Participant #1 — shadow aspect transmuted and celebrated on-chain.

---

## Smart Contract

```solidity
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
    }
}
```

## Contract Functions

### `alchemize(string _pain)`

Transmute your pain into purpose. Stores your transformation on the blockchain permanently under your wallet address. Emits a `Transmuted` event.

### `celebrateEgregiously()`

Call this after you've integrated your shadow. Requires that you've already called `alchemize`. Emits a `Celebrated` event -- your transformation is complete and recorded forever.

### `purpose(address)`

View function. Returns the shadow aspect stored for any wallet address. Anyone can verify a transformation on-chain.

## Deployment

- **Network:** Sepolia Testnet (Chain ID: 11155111)
- **Contract:** [`0xE092336F8f5082e57CcBb341A110C20ad186A324`](https://sepolia.etherscan.io/address/0xE092336F8f5082e57CcBb341A110C20ad186A324)
- **Verified source:** [Routescan](https://testnet.routescan.io/address/0xE092336F8f5082e57CcBb341A110C20ad186A324/contract/11155111/code)

## Project Structure

```
alchemist-forge/
  contracts/        # Solidity source
  deployment/       # Sepolia deployment details
  article/          # America Out Loud article
  index.html        # Live dApp (alchemistforge.io)
```

## Part of FSL

AlchemistForge is part of the [Future Systems Lab](https://futuresystemslab.io) sovereign wellness ecosystem -- an open source platform where mental health meets Web3.
<!-- vercel-reconnect-test Thu May  7 10:26:41 UTC 2026 -->
