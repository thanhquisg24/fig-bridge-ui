import { BSC_CHAIN_ID, FIG_CHAIN_ID } from "./constants";

export const USD_ADDRESS: { [chainid: number]: { symbol: string; address: string } } = {
  [FIG_CHAIN_ID]: { address: "0x6b175474e89094c44da98b954eedeac495271d0f", symbol: "FUSD" },
  [BSC_CHAIN_ID]: { address: "0x5C221E77624690fff6dd741493D735a17716c26B", symbol: "WFUSD" },
};

export const ETHER_TOKEN_SYMBOL: { [chainid: number]: { symbol: string } } = {
  [FIG_CHAIN_ID]: { symbol: "FIG" },
  [BSC_CHAIN_ID]: { symbol: "tBNB" },
};

export function getEtherTokenSymbol(chainId: number): string {
  return ETHER_TOKEN_SYMBOL[chainId] ? ETHER_TOKEN_SYMBOL[chainId].symbol : "unkown";
}

export function getUsdAddress(chainId: number) {
  return USD_ADDRESS[chainId] ? USD_ADDRESS[chainId] : null;
}
