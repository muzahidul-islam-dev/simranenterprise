import type { CustomerProfile } from "./auth";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      apiToken: string;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      avatar: string | null;
      role: string;
      customer_profile?: CustomerProfile;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    apiToken: string;
    first_name: string;
    last_name: string;
    phone: string;
    avatar: string | null;
    role: string;
    customer_profile?: CustomerProfile;
  }
}
