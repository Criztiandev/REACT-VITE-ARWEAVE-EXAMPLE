import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
// @ts-ignore
import { ArweaveWalletKit } from "arweave-wallet-kit";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={() => <div>There was an error</div>}
          >
            <ArweaveWalletKit
              config={{
                permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION"],
                ensurePermissions: true,
              }}
            >
              <App />
            </ArweaveWalletKit>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  </StrictMode>
);
