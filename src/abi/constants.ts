export const FIG_CHAIN_ID = 9999;
export const FIG_CHAIN_COST = {
  chainId: FIG_CHAIN_ID,
  chainName: "FIG Chain",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x989A8abf0393a63c29A5eA24e3Dc8278A95557D8",
  getExplorerAddressLink: (address: string) => `https://agnek.figchain.org/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://agnek.figchain.org/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: "https://rpc-agnek.figchain.org",
  blockExplorerUrl: "https://agnek.figchain.org",
  nativeCurrency: {
    name: "FIG",
    symbol: "FIG",
    decimals: 18,
  },
};
export const BSC_CHAIN_ID = 97;
export const BSC_TEST_NET = {
  chainId: BSC_CHAIN_ID,
  chainName: "BSC Testnet",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C",
  getExplorerAddressLink: (address: string) => `https://testnet.bscscan.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://testnet.bscscan.com/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: "https://data-seed-prebsc-2-s3.binance.org:8545/",
  blockExplorerUrl: "https://testnet.bscscan.io",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
};
