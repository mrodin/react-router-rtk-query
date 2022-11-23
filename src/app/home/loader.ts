import { defer } from "react-router-dom";

import { AppDispatch } from "../../store";
import { testApi } from "../../api/mswApi";

export const loader = (dispatch: AppDispatch) => async () => {
  const request = dispatch(
    testApi.endpoints.getTestData.initiate({ text: "Martin", delay: 1000 })
  );

  // await request;

  const def = defer({
    test: await request,
  });

  request.unsubscribe();

  return def;
};
