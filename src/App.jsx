import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SuccessPage from "./pages/SuccessPage";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import { EmailProvider } from "./context/emailContext";
import { UserProvider } from "./context/userContext";

export default function App() {
  return (
    <UserProvider>
      <EmailProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<SignUpPage />} />

            <Route
              path="success"
              element={
                <ProtectedRoute>
                  <SuccessPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </EmailProvider>
    </UserProvider>
  );
}
