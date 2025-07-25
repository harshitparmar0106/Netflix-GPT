import Body from "./components /Body.jsx"
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </BrowserRouter>
  )
}
export default App;
