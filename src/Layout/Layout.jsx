import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { LayoutBlock } from "./Layout.styles";
import Loader from "../Components/Loader/Loader";
const Layout = ({ children, status }) => {
  return (
    <>
      <LayoutBlock>
        <Header />
        {status === "loading" && <Loader>Loading...</Loader>}
        <>{children}</>
      </LayoutBlock>
      <Footer />
    </>
  );
};

export default Layout;
