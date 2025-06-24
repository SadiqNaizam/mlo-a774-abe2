/**
 * =================================================================================================
 * NOTE: This is a placeholder for your actual MSAL configuration.
 * You must register an application in Azure AD to get these values.
 *
 * For more information, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration
 * =================================================================================================
 */
export const msalConfig = {
  auth: {
    // This is the 'Application (client) ID' from your app registration in Azure.
    clientId: "YOUR_CLIENT_ID_HERE",
    
    // This is the 'Directory (tenant) ID' from your app registration in Azure.
    // Replace "common" with your tenant ID for a single-tenant app.
    authority: "https://login.microsoftonline.com/common",
    
    // This is the 'Redirect URI' you configured in your app registration.
    // It must match exactly.
    redirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: false,
  },
};

/**
 * Scopes define the permissions your application needs.
 * "User.Read" is a basic scope for reading the signed-in user's profile.
 */
export const loginRequest = {
  scopes: ["User.Read"]
};