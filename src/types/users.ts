export interface UserAddress {
  address?: string;
  city?: string;
  state?: string;
  stateCode?: string;
  postalCode?: string;
  country?: string;
}

export interface UserCompany {
  name?: string;
  title?: string;
  department?: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email: string;
  phone: string;
  username?: string;
  birthDate?: string;
  image?: string;
  role?: "admin" | "moderator" | "user" | string;
  address?: UserAddress;
  company?: UserCompany;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
