import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { LayoutBlock, ChildrenBlock } from "./Layout.styles";
import Loader from "../Components/Loader/Loader";
const Layout = ({ children, status }) => {
  return (
    <>
      <LayoutBlock>
        <Header />
        {status === "loading" && <Loader>Loading...</Loader>}
        <ChildrenBlock>{children}</ChildrenBlock>
      </LayoutBlock>
      <Footer />
    </>
  );
};

export default Layout;
