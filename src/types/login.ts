interface LoginBody {
  username: string;
  password: string;
  expiresInMins?: number;
}

interface LoginResponse {
  id: number;
  username: string;
  accessToken: string;
  refreshToken: string;
}
export type { LoginBody, LoginResponse };
