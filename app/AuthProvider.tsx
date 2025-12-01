"use client";

import { Auth0Provider } from "@auth0/auth0-react";
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const domain =
    process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ?? "default-domain.com";
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!;

  return (
    <Auth0Provider domain={domain} clientId={clientId}>
      {children}
    </Auth0Provider>
  );
}
