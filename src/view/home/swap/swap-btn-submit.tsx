/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useAppSelector } from "@hooks/useReduxToolKit";
import { getSwapSelector } from "@store/selector/swap-selectors";
import { useEthers } from "@usedapp/core";
import { useMemo } from "react";

import LoadingButton from "@mui/lab/LoadingButton";

function BtnLoading({ title }: { title: string }) {
  return (
    <LoadingButton
      // color="primary"
      loading
      loadingPosition="center"
      // loadingIndicator={title}
      variant="outlined"
      fullWidth
    >
      {title}
    </LoadingButton>
  );
}

function BtnSubmitDisable({ title }: { title: string }) {
  return (
    <button
      className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium Mui-disabled MuiTypography-root MuiTypography-button e18czh0v0 css-lh2nae"
      tabIndex={-1}
      type="button"
      disabled
    >
      {title}
    </button>
  );
}

export default function SwapBtnSubmit() {
  const { account, chainId, activateBrowserWallet } = useEthers();
  const swapData = useAppSelector(getSwapSelector);
  const btnState: number = 2;
  return (
    <div>
      {btnState === 0 && (
        <button
          onClick={() => activateBrowserWallet()}
          type="button"
          className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiTypography-root MuiTypography-button e18czh0v0 css-18mk15y"
          tabIndex={0}
        >
          Connect Wallet
        </button>
      )}
      {btnState === 1 && <BtnSubmitDisable title="Review Order" />}
      {btnState === 2 && <BtnLoading title="Swap..." />}
    </div>
  );
}
