import { defer } from "react-router-dom";

import { AppDispatch } from "../../store";
import { api } from "../../api";

export const loader = (dispatch: AppDispatch) => async () => {
  const criticalOneRequest = dispatch(api.endpoints.getCriticalOne.initiate({ delay: 1000 }));
  // const lazyOneRequest = dispatch(testApi.endpoints.getLazyOne.initiate({ delay: 2000 }));

  const def = defer({
    criticalOne: await criticalOneRequest,
    // lazyOne: lazyOneRequest,
  });

  criticalOneRequest.unsubscribe();
  // lazyOneRequest.unsubscribe();

  return def;
};
