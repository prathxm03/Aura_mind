// import { Provider } from "react-redux";
// import { RouterProvider } from "react-router";
// import { router } from "./routes";
// import { store } from "./store";

// export default function App() {
//   return (
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   );


import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}