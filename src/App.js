import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./toolkit/store";

import {router} from "./router/router";

// import { persistor } from "./toolkit/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import {cryptoApi} from "./toolkit/features/api/cryptoApi";


function App () {

  return (

      <Provider store={store}>
        {/*<ApiProvider api={cryptoApi}>*/}
        {/*<PersistGate persistor={persistor} loading={<div>...loading</div>}>*/}
        <RouterProvider router={router} />
        {/*</PersistGate>*/}
        {/*</ApiProvider>*/}
      </Provider>
  )
}

export default App;