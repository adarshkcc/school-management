import { LoadingBar } from "react-redux-loading-bar";
import RoutesComponent from "./Routes/index.js";
import ThemeConsumer from "./common/GlobleStyle/ThemeConsumer";
import GlobalCss from "./common/GlobleStyle/globalCss";

const App = () => {
  return (
    <ThemeConsumer>
      <LoadingBar style={{ backgroundColor: "#e5d4c9" }} />
      <GlobalCss />
      <RoutesComponent />
    </ThemeConsumer>
  );
};

export default App;
