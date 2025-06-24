import { ThemeProvider } from "./components/ThemeProvider";
import IndexPage from "./pages/Index";
import ProfilePage from "./pages/Profile";
import { AuthProvider } from "./components/auth/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * =================================================================================================
 * REAL MSAL IMPLEMENTATION NOTE:
 *
 * When you are ready to implement real MSAL authentication:
 *
 * 1. Install MSAL libraries:
 *    `npm install @azure/msal-browser @azure/msal-react`
 *
 * 2. Uncomment the imports below.
 *
 * 3. Create the `msalInstance` using your configuration from `src/authConfig.ts`.
 *
 * 4. Replace the mock `<AuthProvider>` with the real `<MsalProvider>`.
 *
 * 5. You can then remove the mock auth files in `src/components/auth/`.
 * =================================================================================================
 */

// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "./authConfig";

// const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    // <MsalProvider instance={msalInstance}>
    <BrowserRouter>
      <AuthProvider> {/* This is a mock provider for demonstration. Replace with MsalProvider. */}
        <ThemeProvider defaultTheme="dark" storageKey="ascendion-ui-theme">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
    // </MsalProvider>
  );
}

export default App;