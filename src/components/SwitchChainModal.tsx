import { Dialog } from "@mui/material";

type Props = {
  isOpen: boolean;
  onClose(): void;
};

export default function SwitchChainModal(props: Props) {
  const { isOpen, onClose } = props;

  return (
    <Dialog
      onClose={onClose}
      open={isOpen}
      className="iekbcc0 ju367v4 ju367v8f _9pm4ki3 ju367v92 ju367vai ju367va ju367v2j ju367v8f"
      data-rk
    >
      <div className="ju367va ju367v10 ju367v8g">
        <div className="iekbcc0">
          <div className="iekbcc0 _1ckjpok1 ju367val ju367vd0 ju367vp ju367vt ju367vv ju367vdu ju367va ju367v10 ju367v61 ju367v8g  ">
            <div className="iekbcc0 ju367v7t ju367v62 ju367v6n ju367v78">
              <div className="iekbcc0 ju367va ju367v10">
                <div className="iekbcc0 ju367v84 ju367v6d ju367v6y ju367v7j ju367vb6">
                  <div style={{ marginBottom: "14px" }} className="iekbcc0 ju367va ju367vz ju367v2k">
                    <div className="iekbcc0 ju367v62 ju367v6u ju367v7x">
                      <h1 className="iekbcc0 ju367vfx ju367v11 ju367v16 ju367v1d ju367v2o" id="rk_chain_modal_title">
                        Switch Networks
                      </h1>
                    </div>
                    <button
                      onClick={() => onClose()}
                      className="iekbcc0 iekbcc9 ju367v4 ju367v9l ju367vbl ju367vs ju367vt ju367vv ju367veo ju367va ju367v26 ju367v2j ju367v8i ju367v8r _12cbo8i3 ju367v8g _12cbo8i5 _12cbo8i7"
                      aria-label="Close"
                      type="button"
                      style={{ willChange: "transform" }}
                    >
                      <svg
                        aria-hidden="true"
                        fill="none"
                        height={10}
                        viewBox="0 0 10 10"
                        width={10}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="iekbcc0 ju367v7v ju367v64 ju367v6p ju367v7a ju367va ju367v10 ju367v1i">
                    <button className="iekbcc0 iekbcc9 ju367vo ju367va" type="button">
                      <div className="iekbcc0 ju367v7z ju367v68 ju367v6t ju367v7e ju367vo ju367v8i ju367v90 ju367vag ju367vfx _12cbo8i3 ju367v8g _12cbo8i6">
                        <div className="iekbcc0 ju367v11 ju367v15 ju367v1c">
                          <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v2k">
                            <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v1i ju367v26">
                              <div className="iekbcc0 ju367v2f ju367v42">
                                <div
                                  className="iekbcc0 ju367vs ju367v26 ju367v61 ju367v8g ju367v8r"
                                  aria-label="Goerli"
                                  style={{ background: "rgb(72, 76, 80)" }}
                                >
                                  <div
                                    className="iekbcc0 ju367vh ju367v2f ju367v8e ju367v90"
                                    style={{
                                      transition: "opacity 0.15s linear 0s",
                                      userSelect: "none",
                                      backgroundImage: "url('/static/img/logos/ethereum-logo.svg')",
                                      backgroundRepeat: "no-repeat",
                                      opacity: 1,
                                    }}
                                  />
                                </div>
                              </div>
                              <div>Goerli</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="iekbcc0 iekbcc9 ju367vo ju367va" type="button">
                      <div className="iekbcc0 ju367v7z ju367v68 ju367v6t ju367v7e ju367vo ju367v8i ju367v90 ju367vag ju367vfx _12cbo8i3 ju367v8g _12cbo8i6">
                        <div className="iekbcc0 ju367v11 ju367v15 ju367v1c">
                          <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v2k">
                            <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v1i ju367v26">
                              <div className="iekbcc0 ju367v2f ju367v42">
                                <div
                                  className="iekbcc0 ju367vs ju367v26 ju367v61 ju367v8g ju367v8r"
                                  aria-label="BSC Testnet"
                                  style={{ background: "transparent" }}
                                >
                                  <div
                                    className="iekbcc0 ju367vh ju367v2f ju367v8e ju367v90"
                                    style={{
                                      transition: "opacity 0.15s linear 0s",
                                      userSelect: "none",
                                      backgroundImage: "url('/static/img/logos/bsc-logo.svg')",
                                      backgroundRepeat: "no-repeat",
                                      opacity: 1,
                                    }}
                                  />
                                </div>
                              </div>
                              <div>BSC Testnet</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="iekbcc0 iekbcc9 ju367vo ju367va" disabled type="button">
                      <div className="iekbcc0 ju367v7z ju367v68 ju367v6t ju367v7e ju367vo ju367v8i ju367v90 ju367v93 ju367vdl ju367vt ju367vv ju367ve0 ju367vec">
                        <div className="iekbcc0 ju367v11 ju367v15 ju367v1c">
                          <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v2k">
                            <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v1i ju367v26">
                              <div className="iekbcc0 ju367v2f ju367v42">
                                <div
                                  className="iekbcc0 ju367vs ju367v26 ju367v61 ju367v8g ju367v8r"
                                  aria-label="Polygon Mumbai"
                                  style={{ background: "transparent" }}
                                >
                                  <div
                                    className="iekbcc0 ju367vh ju367v2f ju367v8e ju367v90"
                                    style={{
                                      transition: "opacity 0.15s linear 0s",
                                      userSelect: "none",
                                      backgroundImage: "url('/static/img/logos/polygon-logo.svg')",
                                      backgroundRepeat: "no-repeat",
                                      opacity: 1,
                                    }}
                                  />
                                </div>
                              </div>
                              <div>Polygon Mumbai</div>
                            </div>
                            <div className="iekbcc0 ju367v4 ju367va ju367vz ju367v41">
                              <div className="iekbcc0 ju367vec ju367v11 ju367v14 ju367v1a ju367v2o">Connected</div>
                              <div className="iekbcc0 ju367va3 ju367vdl ju367vs ju367vt ju367vv ju367v22 ju367v3h ju367v8n" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}