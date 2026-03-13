import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Certifications } from "./pages/Certifications";
import { FieldWorks } from "./pages/FieldWorks";
import { AnsysSimulation } from "./pages/projects/AnsysSimulation";
import { BotProjects } from "./pages/projects/Bot";
import { CadFiles } from "./pages/projects/CadFiles";
import { Gabay } from "./pages/projects/Gabay";
import { MapsProjects } from "./pages/projects/Maps";
import { PosterProjects } from "./pages/projects/Poster";
import { PythonProjects } from "./pages/projects/Python";
import { WebGnomeProjects } from "./pages/projects/WebGnome";
import { MpaDatabase } from "./pages/projects/MpaDatabase";
import { Alwan } from "./pages/volunteer/Alwan";
import { Balyena } from "./pages/volunteer/Balyena";
import { Psychosocial } from "./pages/volunteer/Psychosocial";
import { Workshops } from "./pages/Workshops";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "certifications", Component: Certifications },
      { path: "field-works", Component: FieldWorks },
      { path: "projects/ansys", Component: AnsysSimulation },
      { path: "projects/bot", Component: BotProjects },
      { path: "projects/cad", Component: CadFiles },
      { path: "projects/gabay", Component: Gabay },
      { path: "projects/maps", Component: MapsProjects },
      { path: "projects/mpa-database", Component: MpaDatabase },
      { path: "projects/poster", Component: PosterProjects },
      { path: "projects/python", Component: PythonProjects },
      { path: "projects/webgnome", Component: WebGnomeProjects },
      { path: "volunteer/alwan", Component: Alwan },
      { path: "volunteer/balyena", Component: Balyena },
      { path: "volunteer/psychosocial", Component: Psychosocial },
      { path: "workshops", Component: Workshops },
      { path: "contact", Component: Contact },
    ],
  },
]);