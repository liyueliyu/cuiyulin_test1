import request from "./request";

export const getAccessToken = (data) => request.post("/oauth/token",data)