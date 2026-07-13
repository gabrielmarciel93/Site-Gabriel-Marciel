declare module "@webstudio-is/wsauth" {
  export type WsAuthRoute = {
    path: string;
    users: Array<{ username: string; password: string }>;
  };

  export function authenticateRequest(
    request: Request,
    authRoutes: WsAuthRoute[]
  ): Response | undefined;
}
