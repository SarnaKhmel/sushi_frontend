import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { LayoutBlock } from "./Layout.styles";
const Layout = ({ children }) => {
  return (
    <>
      <LayoutBlock>
        <Header />
        <>{children}</>
      </LayoutBlock>
      <Footer />
    </>
  );
};

export default Layout;
