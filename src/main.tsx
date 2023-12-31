import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./input.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import CV from "./CV.tsx";
import About from "./About.tsx";
import ContactMe from "./ContactMe.tsx";
import Projects from "./Projects.tsx";
import { RecoilRoot } from "recoil";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/cv",
        element: <CV />,
      },
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/contact_me",
        element: <ContactMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ChakraProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ChakraProvider>
  </RecoilRoot>,
);
