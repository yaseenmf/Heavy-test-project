import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// import Auth from "./featuers/auth/auth";
import CompleteProfile from "./pages/completeProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import AppLayout from "./ui/appLayout";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-Profile" element={<CompleteProfile />} />
        <Route element={<AppLayout />}>
          <Route path="/owner" element={<Owner />} />
        </Route>

        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
