import { ThemeProvider } from "./components/ThemeProvider";
import IndexPage from "./pages/Index";
import { AuthProvider } from "./components/auth/AuthContext";

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
      <AuthProvider> {/* This is a mock provider for demonstration. Replace with MsalProvider. */}
        <ThemeProvider defaultTheme="dark" storageKey="ascendion-ui-theme">
          <IndexPage />
        </ThemeProvider>
      </AuthProvider>
    // </MsalProvider>
  );
}

export default App;