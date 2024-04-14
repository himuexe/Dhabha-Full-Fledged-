import { auth } from "express-oauth2-jwt-bearer";
 export const jwtCheck = auth({ // check authorization header for the bearer token 
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
  });