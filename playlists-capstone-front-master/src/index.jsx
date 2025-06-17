import ReactDOM from "react-dom/client";
import App from "./App";

import store from "./store/store";
import { Provider } from "react-redux";

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
