import ConnectWalletContainer from "./ConnectWalletContainer";

/* eslint-disable jsx-a11y/no-redundant-roles */
export default function Header() {
  // useEffect(() => {
  //   console.log("🚀 ~ file: header.tsx:8 ~ Header ~ account:", account);
  // }, [account]);
  return (
    <header
      className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed bg-white dark:bg-grey-900 mui-fixed css-1exm00j"
      style={{}}
    >
      <div className="MuiContainer-root MuiContainer-maxWidthXl css-1ekb41w">
        <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-8g4gfm">
          <div className="flex gap-6 items-center grow">
            <a role="link" tabIndex={0} href="/" className="flex gap-6 items-center grow">
              <img width="116" height="25" src="/static/img/logos/icon-figchain.png" alt="Fig" />
              <h1 className="text-2xl" style={{ color: "#29abe2", fontWeight: "bold" }}>
                FIG Bridge
              </h1>
            </a>
            <div className="hidden lg:flex gap-1"></div>
          </div>
          <div className="css-muaxpu eqz6u831">
            <div className="inner-content">
              <div className="flex gap-2 justify-center w-full lg:w-auto" style={{}}>
                {/* <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiTypography-root MuiTypography-button w-full md:min-w-[163px] e1jvrmku0 css-35mpm5"
                  tabIndex={0}
                  type="button"
                >
                  Connect Wallet
                </button> */}
                <ConnectWalletContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
