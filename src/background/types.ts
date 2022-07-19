export type LoginInfoType = {
  host?: string;
  agent: string;
  success: boolean;
  user: string;
  password: string;
  at?: string;
};

export type CookiesInfoType = {
  host?: string;
  agent?: string;
  domain?: string;
  user?: string;
  password?: string;
  cookies: any;
  at?: string;
};
