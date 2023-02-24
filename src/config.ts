import { Config, DEFAULT_SUPPORTED_CHAINS } from "@usedapp/core";

import { BSC_TEST_NET, FIG_CHAIN_COST as FIG_CHAIN } from "./abi/constants";

export { FIG_CHAIN };

const configCustomChain: Config = {
  readOnlyChainId: FIG_CHAIN.chainId,
  readOnlyUrls: {
    [FIG_CHAIN.chainId]: FIG_CHAIN.rpcUrl,
    [BSC_TEST_NET.chainId]: BSC_TEST_NET.rpcUrl,
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, FIG_CHAIN],
};

// IMPORTANT: Fill that object with your own data.

const config = {
  basename: "/",
  defaultPath: "/",
  DEFAULT_TOKEN_ID: 1,
  chainConfig: configCustomChain,
};

export default config;
