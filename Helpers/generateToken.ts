import jwt from "jsonwebtoken";
/**
 * 
 * Genera un token  JWT ()
 * 
 * @param properties 
 * @param key 
 * @param minutes 
 * @returns 
 */


export interface TokenPayload {
    id: number | string;
    // Otros campos relevantes
}

/*
let generateToken = (payload: TokenPayload, key: string, minutes: number): string => jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (minutes * 60),
    data: payload
}, key);
*/


let generateToken = (properties: any, key: any, minutes: number) => jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (minutes * 60),
    data: properties}, key
);


export default generateToken;
