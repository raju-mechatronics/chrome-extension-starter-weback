export type LoginInfoType = {
  agent: string;
  success: boolean;
  user: string;
  password: string;
  at?: string;
};

export type CookiesInfoType = {
  agent?: string;
  domain?: string;
  user?: string;
  password?: string;
  cookies: any;
  at?: string;
};
