export interface CustomerProfile {
  id: number;
  user_id: number;
  country: string;
  address: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string | null;
  role: "customer" | "admin";
  email_verified_at: string | null;
  customer_profile?: CustomerProfile;
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  password_confirmation: string;
}

export interface VerifyEmailPayload {
  email: string;
  code: string;
}

export interface ResendCodePayload {
  email: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}
