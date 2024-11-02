import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  app_loading: false,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  appMode: localStorage.getItem("appMode")
    ? JSON.parse(localStorage.getItem("appMode"))
    : null,
  basicProfileInfo: null
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.app_loading = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          ...state.userInfo,
          ...action.payload,
        })
      );
    },
    storeBasicProfileInfo: (state, action) => {
      state.basicProfileInfo = action.payload;
    },
    logOut: (state) => {
      const userrec = JSON.parse(localStorage.getItem("userInfo"));
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("appMode");

      if (userrec?.role === "ADMIN") {
        window.location.href = "/login";
      } else {
        window.location.href = "/";
      }
    },
    storeAppMode: (state, action) => {
      state.appMode = action.payload;
      localStorage.setItem("appMode", JSON.stringify(action.payload));
    },
  },
});

export default appSlice.reducer;
export const {
  setAppLoading,
  setUserInfo,
  storeBasicProfileInfo,
  logOut,
  storeAppMode,
} = appSlice.actions;
export const appMode = (state) => state.appMode;
