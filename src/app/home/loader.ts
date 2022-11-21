import { AppDispatch } from "../../store";
import { testApi } from "../../core/api/mswApi";

export const loader = (dispatch: AppDispatch) => async () => {
  const request = dispatch(
    testApi.endpoints.getTestData.initiate({ text: "Martin", delay: 1000 })
  );

  await request;
};
