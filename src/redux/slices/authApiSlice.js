import { appApiHeader, generalApiSlice } from "../apiSlice";

const authApiSlice = generalApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Login
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
        headers: {
          ...appApiHeader
        }
      })
    }),

    //ForgotPassword
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        body,
        headers: {
          ...appApiHeader
        }
      })
    }),

    // verifyOtp: builder.mutation({
    //   query: (body) => ({
    //     url: "/auth/ibanking/admin/otp-verification",
    //     method: "POST",
    //     body,
    //     headers: {
    //       ...appApiHeader
    //     }
    //   })
    // })
  }),
  overrideExisting: false
});

export const {
  useLoginMutation,
  useForgotPasswordMutation
//   useVerifyOtpMutation
} = authApiSlice;
