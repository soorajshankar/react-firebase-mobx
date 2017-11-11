import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import { Provider } from 'mobx-react';
// import userStore from './stores/userStore';
// import tabModelStore from './stores/tabModelStore';
// import addAssetsStore from './stores/addAssetsStore';
// import loanPoolStore from './stores/loanPoolStore';
// import submitIssuesStore from './stores/submitIssuesStore';
// import { useStrict } from 'mobx';
// import { AppContainer } from 'react-hot-loader'

// const stores = { userStore,tabModelStore,submitIssuesStore,addAssetsStore,loanPoolStore};
ReactDOM.render(
      <App />,
  document.getElementById("root")
);
// ReactDOM.render(
//   <AppContainer>
//     <Provider {...stores}>
//       <App />
//     </Provider>
//   </AppContainer>,
//   document.getElementById("root")
// );
