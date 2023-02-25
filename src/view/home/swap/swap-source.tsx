import { ITokenChainInfo } from "@abi/tokenAddress";
import InputSelectDefault from "@components/InputSelectDefault";
import InputSelectWithIcon from "@components/InputSelectWithIcon";
import SwapModalWrapper from "@components/SwapModalWrapper";
import { ChainIconItem } from "@components/chain-icon/chain-icon-modal";
import { useAppSelector, useAppDispatch } from "@hooks/useReduxToolKit";
import { selectSourceChainIdAction, selectSourceTokenAction } from "@store/actions";
import { getSourceSelector, getSourceTokenSelector } from "@store/selector/swap-selectors";
import { CHAIN_ICON_INFO, getChainIconInfo, getTokenListByChain } from "@utils/index";
import { useMemo, useState } from "react";

function SwapSourceChainBtn(props: { selectedChainId: number }) {
  const { selectedChainId } = props;
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const onHandleOpen = () => {
    setShow(true);
  };
  const onSelectChainId = (chainId: number) => {
    dispatch(selectSourceChainIdAction(chainId));
    handleClose();
  };
  const chainIconinfo = useMemo(() => {
    if (selectedChainId > 0) {
      return {
        chain: getChainIconInfo(selectedChainId),
        // chainTokenList: getTokenListByChain(selectedChainId),
      };
    }
    return null;
  }, [selectedChainId]);

  return (
    <>
      {chainIconinfo ? (
        <InputSelectWithIcon
          title={chainIconinfo.chain.name}
          imgUrl={chainIconinfo.chain.iconPath}
          onClickHanlder={onHandleOpen}
        />
      ) : (
        <InputSelectDefault title="Select Network" onClickHanlder={onHandleOpen} />
      )}
      <SwapModalWrapper
        title="Select Network"
        description="What network do you want to send assets from?"
        isOpen={show}
        onClose={handleClose}
      >
        <div className="css-gj7b5f eu2qphv1">
          {Object.values(CHAIN_ICON_INFO).map((item) => (
            <ChainIconItem
              key={item.chainId}
              title={item.name}
              onHandleClick={() => onSelectChainId(item.chainId)}
              iconUrl={item.iconPath}
            />
          ))}
        </div>
      </SwapModalWrapper>
    </>
  );
}

function SwapSourceTokenBtn(props: { selectedChainId: number }) {
  const { selectedChainId } = props;
  const currentTokeninfo = useAppSelector(getSourceTokenSelector);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const onHandleOpen = () => {
    setShow(true);
  };
  const onSelectToken = (item: ITokenChainInfo) => {
    dispatch(selectSourceTokenAction(item));
    handleClose();
  };
  const chainIconinfo = useMemo(() => {
    if (selectedChainId > 0) {
      return getTokenListByChain(selectedChainId);
    }
    return null;
  }, [selectedChainId]);

  return (
    <>
      {currentTokeninfo ? (
        <InputSelectWithIcon
          title={currentTokeninfo.symbol}
          imgUrl={currentTokeninfo.imgUrl}
          onClickHanlder={onHandleOpen}
        />
      ) : (
        <InputSelectDefault
          title="Select Token"
          onClickHanlder={onHandleOpen}
          disabled={chainIconinfo === null || chainIconinfo.length === 0}
        />
      )}
      <SwapModalWrapper
        title="Select Token"
        description="What asset do you want to send?"
        isOpen={show}
        onClose={handleClose}
      >
        {chainIconinfo && (
          <div className="css-gj7b5f eu2qphv1">
            {chainIconinfo.map((item) => (
              <ChainIconItem
                key={item.address}
                title={item.symbol}
                onHandleClick={() => onSelectToken(item)}
                iconUrl={item.imgUrl}
              />
            ))}
          </div>
        )}
      </SwapModalWrapper>
    </>
  );
}

export default function SwapSource() {
  const sourceSwapinfo = useAppSelector(getSourceSelector);
  return (
    <div className="rounded-t css-1nestwu ec4inb73">
      <div className="flex items-center justify-between">
        <p className="MuiTypography-root MuiTypography-body1 css-i3l18a">Swap from:</p>
        <div className="flex items-center">
          <p className="MuiTypography-root MuiTypography-caption text-grey-300 dark:text-grey-400 flex items-center tracking-[-0.03em] css-m1yo1i">
            Balance: 0 tMATIC<span className="ml-1 mr-1">|</span>
          </p>
          <p className="MuiTypography-root MuiTypography-caption font-semibold text-grey-300 dark:text-grey-400 hover:text-grey-400 hover:dark:text-grey-500 transition-all cursor-pointer tracking-[-0.03em] css-m1yo1i">
            Max
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-2">
        <input
          type="number"
          className="sm:text-left text-right ec4inb72 css-1aao2o7 e15splxn0"
          placeholder="Enter an amount"
        />
        <div className="css-4plb0w ec4inb71">
          <SwapSourceChainBtn selectedChainId={sourceSwapinfo.selectedChainId} />
          <SwapSourceTokenBtn selectedChainId={sourceSwapinfo.selectedChainId} />
        </div>
      </div>
    </div>
  );
}
