import { defer } from "react-router-dom";

import { AppDispatch } from "../../store";
import { testApi } from "../../api/mswApi";

export const loader = (dispatch: AppDispatch) => async () => {
  const request = dispatch(testApi.endpoints.getCriticalOne.initiate({ delay: 1000 }));

  // await request;

  const def = defer({
    test: await request,
  });

  request.unsubscribe();

  return def;
};
