export interface AuthSession {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: string;
  };
  expires: Date;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}
