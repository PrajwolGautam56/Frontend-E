import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Gallerypage from "./Gallerypage";
import Team from "./Team";
import Newsletter from "./Newsletter";
import Test from "./Test";
import GalleryEditor from "./GalleryEditor";
import Gallery from "./Gallery";




  const appRouter = createBrowserRouter([
   

    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/newsletter",
      element: <Newsletter />,
    },
    {
      path: "/gallery",

      element: <Gallerypage />,
    },

    {
      path: "/contact",

      element: <Contact />,
    },
    {
      path: "/test",

      element: <Test />,
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/gal",
      element: <Gallery />,
      
    },
    {
      path: "/admin",
      element: <GalleryEditor />,
      
    },

    
  ]);
  


export default appRouter;
