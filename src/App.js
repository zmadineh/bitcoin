import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./toolkit/store";
import HomePage from "./pages/home/homePage";
import LivePrice from "./pages/live-price/LivePrice";

// import { persistor } from "./toolkit/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import {cryptoApi} from "./toolkit/features/api/cryptoApi";


function App () {

  const router = createBrowserRouter([
       {
          path: "/",
          element: <HomePage />,
       },
      {
          path: "/live",
          element: <LivePrice />
      },
  ]);

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