import type { AuthError, Provider, User } from "@supabase/supabase-js";

import { getSupabaseClient } from "@/lib/supabase/client";

type AuthResponse = {
  user: User | null;
  error: string | null;
};

type AuthSessionResponse = AuthResponse & {
  sessionToken: string | null;
};

type SignUpPayload = {
  email: string;
  password: string;
  organizationName?: string;
  phone?: string;
};

type SignInPayload = {
  email: string;
  password: string;
};

const formatAuthError = (error: AuthError | null) => error?.message ?? null;

const getClientOrError = () => {
  try {
    return { client: getSupabaseClient(), error: null };
  } catch (error) {
    return {
      client: null,
      error: error instanceof Error ? error.message : "Supabase client unavailable."
    };
  }
};

export async function signInWithEmail({ email, password }: SignInPayload): Promise<AuthSessionResponse> {
  const { client, error: clientError } = getClientOrError();
  if (!client) {
    return { user: null, sessionToken: null, error: clientError };
  }

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password
  });

  return {
    user: data?.user ?? null,
    sessionToken: data.session?.access_token ?? null,
    error: formatAuthError(error)
  };
}

export async function signUpWithEmail({
  email,
  password,
  organizationName,
  phone
}: SignUpPayload): Promise<AuthSessionResponse> {
  const { client, error: clientError } = getClientOrError();
  if (!client) {
    return { user: null, sessionToken: null, error: clientError };
  }

  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        organization_name: organizationName,
        phone
      }
    }
  });

  return {
    user: data?.user ?? null,
    sessionToken: data.session?.access_token ?? null,
    error: formatAuthError(error)
  };
}

export async function signInWithProvider(provider: Provider, redirectTo?: string) {
  const { client, error: clientError } = getClientOrError();
  if (!client) {
    return { url: null, error: clientError };
  }

  const { data, error } = await client.auth.signInWithOAuth({
    provider,
    options: redirectTo ? { redirectTo } : undefined
  });

  return {
    url: data?.url ?? null,
    error: formatAuthError(error)
  };
}

export async function requestPasswordReset(email: string, redirectTo?: string): Promise<AuthResponse> {
  const { client, error: clientError } = getClientOrError();
  if (!client) {
    return { user: null, error: clientError };
  }

  const { error } = await client.auth.resetPasswordForEmail(email, {
    redirectTo
  });

  return {
    user: null,
    error: formatAuthError(error)
  };
}

export async function signOut(): Promise<AuthResponse> {
  const { client, error: clientError } = getClientOrError();
  if (!client) {
    return { user: null, error: clientError };
  }

  const { error } = await client.auth.signOut();

  return {
    user: null,
    error: formatAuthError(error)
  };
}

export async function getCurrentUser(): Promise<AuthResponse> {
  const { client, error: clientError } = getClientOrError();
  if (!client) {
    return { user: null, error: clientError };
  }

  const { data, error } = await client.auth.getUser();

  return {
    user: data?.user ?? null,
    error: formatAuthError(error)
  };
}
