import Nav from "./Nav";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="flex flex-col">{children}</div>
      <Footer />
    </>
  );
};

export default Container;
