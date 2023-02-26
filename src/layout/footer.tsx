/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  return (
    <div className="pb-12 md:pb-0 bg-black">
      <footer className="bg-black flex items-center justify-center dark:border-t dark:border-grey-600">
        <div className="flex flex-col w-full max-w-[1536px] mx-auto px-4 md:px-8 py-10 gap-[40px] md:gap-[80px]">
          <div className="flex gap-[40px] sm:gap-5 flex-col sm:flex-row sm:items-center sm:justify-between">
            <a href="/">
              <h1 style={{ color: "white", fontWeight: "bold" }}>FIGCHAIN</h1>
            </a>
            <div>
              <div className="eap777i0 css-1spwsbf e1sjvzpi0">
                <select value="en" onChange={() => {}}>
                  <option value="en">English</option>
                  <option value="es-MX">Español</option>
                  <option value="hi-IN">हिंदी</option>
                  <option value="ja-JP">日本語</option>
                  <option value="ko-KR">한국</option>
                  <option value="ru-RU">русский</option>
                  <option value="zh-CN">简体中文</option>
                  <option value="zh-TW">繁體中文</option>
                </select>
                <svg
                  width={15}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="MuiTypography-root MuiTypography-body1 text-grey-300 css-i3l18a">© 2023 FigChain, Inc</p>
        </div>
      </footer>
    </div>
  );
}
