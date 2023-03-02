import { memo } from "react";
import ErrorBound from "src/components/ErrorBound";
import Footer from "./Footer";
import Header from "./Header";
import WrapLayout from "./style";

interface Props {
  children: any;
}
// eslint-disable-next-line
function Layout({ children }: Props) {
  return (
    <ErrorBound>
      <WrapLayout>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </WrapLayout>
    </ErrorBound>
  );
}
export default memo(Layout);
