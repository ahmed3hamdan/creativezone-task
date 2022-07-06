import { Fragment } from "react";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "styles/reset.scss";
import "styles/global.scss";

const App = ({ Component, pageProps }) => {
  const Layout = Component.layout || Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
