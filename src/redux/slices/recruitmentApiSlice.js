import { appApiHeader, generalApiSlice } from "../apiSlice";

const recruitmentApiSlice = generalApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Register
    createStaff: builder.mutation({
      query: (body) => ({
        url: "/recruitment/createStaff",
        method: "POST",
        body,
        headers: {
          ...appApiHeader
        }
      })
    }),

  }),
  overrideExisting: false
});

export const {
  useCreateStaffMutation,
//   useVerifyOtpMutation
} = recruitmentApiSlice;
