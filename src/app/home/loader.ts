import { defer } from "react-router-dom";

import { AppDispatch } from "../../store";
import { api } from "../../api";

export const loader = (dispatch: AppDispatch) => async () => {
  const projectsEndpoint = dispatch(api.endpoints.getProjects.initiate({ delay: 2000 }));
  const dashboardEndpoint = dispatch(api.endpoints.getDashboard.initiate({ delay: 1000 }));
  const commentsEndpoint = dispatch(api.endpoints.getComments.initiate({ delay: 2500 }));
  const repliesEndpoint = dispatch(api.endpoints.getReplies.initiate({ delay: 4500 }));

  const deferredData = defer({
    projects: await projectsEndpoint,
    dashboard: await dashboardEndpoint,
    comments: commentsEndpoint,
    replies: repliesEndpoint,
  });

  projectsEndpoint.unsubscribe();
  dashboardEndpoint.unsubscribe();
  commentsEndpoint.unsubscribe();
  repliesEndpoint.unsubscribe();

  return deferredData;
};
