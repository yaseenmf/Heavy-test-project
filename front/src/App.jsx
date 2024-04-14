import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// import Auth from "./featuers/auth/auth";
import CompleteProfile from "./pages/completeProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:max-w-screen-xl:">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-Profile" element={<CompleteProfile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
