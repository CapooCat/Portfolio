import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Timeline from "./Timeline";
import Gallery from "./Gallery";
import GoTop from "../../components/Fixed/GoTop";
import Navigator from "../../components/Fixed/Navigator";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Header */}
        <Header />

        {/* Fixed Position Components */}
        <GoTop />
        <Navigator />

        {/* Home Sections */}
        <Intro />
        <About />
        <Skills />
        <Timeline />
        <Gallery />

        {/* Footer */}
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default Home;
