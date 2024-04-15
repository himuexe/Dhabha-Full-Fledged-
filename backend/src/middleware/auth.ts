import { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from 'jsonwebtoken'
import User from "../models/user";

declare global { // to add custom values to express 
  namespace Express{
    interface Request{
      userId: string;
      auth0Id: string;
    }
  }
}


export const jwtCheck = auth({ // check authorization header for the bearer token 
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});



export const jwtParse = async (req:Request, res:Response, next:NextFunction) => {
const {authorization} = req.headers; // get the authorization header value for bearer token authentication
if(!authorization|| !authorization.startsWith('Bearer ')){
  return res.sendStatus(401);
}
const token = authorization.split(" ")[1]; //  split out just the actual bearer token from the full string value of the authorization header

try {
  const decoded = jwt.decode(token) as jwt.JwtPayload;// decode the token to get the user id

  const auth0Id = decoded.sub;// get the Auth0 ID for this user
  const user = await User.findOne({auth0Id});
  if(!user){
     return res.sendStatus(401);
  }
  req.auth0Id = auth0Id as string;
  req.userId = user._id.toString(); //
  next();


} catch (error) {
  res.sendStatus(401);
}
};