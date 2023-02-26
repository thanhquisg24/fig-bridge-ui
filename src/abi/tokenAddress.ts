import { Contract, ethers } from "ethers";
import { BSC_CHAIN_ID, FIG_CHAIN_ID } from "./constants";
import {
  bscTestNetBrigdeContractAbi,
  bscUsdContractAddress,
  figBrigdeContractAbi,
  figUsdContractAddress,
} from "./abi-contract";

export const USD_ADDRESS: { [chainid: number]: { symbol: string; address: string; imgUrl: string } } = {
  [FIG_CHAIN_ID]: { address: "0x5e84E745478Afc73c888D1ab6e46C9274914Bbe0", symbol: "FUSD", imgUrl: "usdt-logo.svg" },
  [BSC_CHAIN_ID]: { address: "0x231a080ae1a1c90208af61b9e05bf57ab1ce343f", symbol: "WFUSD", imgUrl: "usdt-logo.svg" },
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

export const BRIDGE_WALLET_ADDRESS = "0x35194b1F825820d1F1a8826d52E033Fe439E7513";

const figBrigdeUsdContractInterface = new ethers.utils.Interface(figBrigdeContractAbi);
const figBrigdeUsdContract = new Contract(figUsdContractAddress, figBrigdeUsdContractInterface);

const bscBrigdeUsdContractInterface = new ethers.utils.Interface(bscTestNetBrigdeContractAbi);
const bscBrigdeUsdContract = new Contract(bscUsdContractAddress, bscBrigdeUsdContractInterface);
export interface ITokenChainInfo {
  symbol: string;
  address: string;
  imgUrl: string;
}

export const TOKEN_CHAIN_INFO: { [chainId: number]: { [tokenAddress: string]: ITokenChainInfo } } = {
  [FIG_CHAIN_ID]: {
    [USD_ADDRESS[FIG_CHAIN_ID].address]: { ...USD_ADDRESS[FIG_CHAIN_ID] },
  },
  [BSC_CHAIN_ID]: {
    [USD_ADDRESS[BSC_CHAIN_ID].address]: { ...USD_ADDRESS[BSC_CHAIN_ID] },
  },
};

export const TOKEN_CHAIN_CONTRACT: { [chainId: number]: { [tokenAddress: string]: { contract: Contract } } } = {
  [FIG_CHAIN_ID]: {
    [USD_ADDRESS[FIG_CHAIN_ID].address]: { contract: figBrigdeUsdContract },
  },
  [BSC_CHAIN_ID]: {
    [USD_ADDRESS[BSC_CHAIN_ID].address]: { contract: bscBrigdeUsdContract },
  },
};
