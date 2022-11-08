import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./toolkit/store";
// import { persistor } from "./toolkit/store";
// import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./pages/home/homePage";
import LivePrice from "./pages/live-price/LivePrice";

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
        {/*<PersistGate persistor={persistor} loading={<div>...loading</div>}>*/}
        <RouterProvider router={router} />
        {/*</PersistGate>*/}
      </Provider>
  )
}

export default App;