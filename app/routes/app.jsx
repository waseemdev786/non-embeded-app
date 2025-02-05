
import { Outlet, useLoaderData, useRouteError } from "@remix-run/react";
// import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { boundary } from "@shopify/shopify-app-remix/server";

import { authenticate } from "../shopify.server";
import { Global } from "@emotion/react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { globalStyle } from "../emotionStyled/common";


// export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};


export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider isEmbeddedApp={false} apiKey={apiKey}>
      <Global styles={globalStyle} />
      <div css={{ marginInline: 'auto' }}>
        <div css={{ display: "grid", gridTemplateColumns: "300px 1fr", height: "100vh", overflow: "hidden" }}>
          <Sidebar />
          <div css={{ background: "linear-gradient(to top, var(--primary-background-color), white)", overflow: "auto", scrollbarWidth: "thin", height: "100vh" }}>
            <Topbar />
            <main css={{ overflow: "hidden", padding: "24px" }}>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
