import Footer from "./footer";
import Header from "./header";

export default function DefaultLayout(props: { children: JSX.Element | string | undefined | null }) {
  const { children } = props;
  return (
    <div data-rk>
      <div className="css-hzuiln ejqi8vo0">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
