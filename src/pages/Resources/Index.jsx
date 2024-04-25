import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import GoTop from "../../components/Fixed/GoTop";
import Intro from "./Intro";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import List from "./List";

const queryClient = new QueryClient();

function Resources() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Header */}
        <Header />

        {/* Fixed Position Components */}
        <GoTop />

        {/* Home Sections */}
        <Intro />
        <List />

        {/* Footer */}
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default Resources;
