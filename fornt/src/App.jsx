import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// import Auth from "./featuers/auth/auth";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:max-w-screen-xl:">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
