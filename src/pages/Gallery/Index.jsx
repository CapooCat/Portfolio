import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import GoTop from "../../components/Fixed/GoTop";
import Intro from "./Intro";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Gallery() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Header */}
        <Header />

        {/* Fixed Position Components */}
        <GoTop />

        {/* Home Sections */}
        <Intro />

        {/* Footer */}
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default Gallery;
