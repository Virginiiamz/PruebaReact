import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './paginas/Home.jsx';
import PaginaError from './paginas/PaginaError.jsx';
import VisorNotas from './componentes/VisorNotas.jsx';
import EditorNotas from './componentes/EditorNotas.jsx';


let router = createBrowserRouter([
  {
    path: "/",
    element : <Home />,
    errorElement : <PaginaError />,
    children: [   // Los hijos se renderizan en el elemento <Outlet /> del padre
      {
        path: "/ejercicio2",
        element: <VisorNotas></VisorNotas>,
      },
      {
        path: "/ejercicio3/:id",
        element: <EditorNotas></EditorNotas>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

