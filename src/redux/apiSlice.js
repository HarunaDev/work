/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "./appSlice";

export const appApiHeader = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "https://localhost:44388/api";
    // return "https://mock.apidog.com/m1/611770-578407-default";
  } else if (process.env.NODE_ENV === "production") {
    return "https://pihcapi.xmapapp.com";
  } 
};

const baseQuery = fetchBaseQuery({
  baseUrl: "",
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const token = state?.app?.userInfo?.tokenDTO?.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const state = api.getState();
  const baseUrl = getBaseUrl();

  const result = await baseQuery(
    { ...args, url: `${baseUrl}${args.url}` },
    api,
    extraOptions
  );

  if (
    args?.url !== "/auth/login" &&
    result?.error?.status === 401
  ) {
    api.dispatch(logOut());
  }
  return result;
};

export const generalApiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "api",
  endpoints: (builder) => ({}),
});
