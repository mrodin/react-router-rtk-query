import { defer } from "react-router-dom";

export const loader = async () => {
  const projectsPromise = fetch("/projects?delay=2000").then((res) => res.json());
  const dashboardPromise = fetch("/dashboard?delay=1000").then((res) => res.json());
  const commentsPromise = fetch("/comments?delay=2500").then((res) => res.json());
  const repliesPromise = fetch("/replies?delay=4500").then((res) => res.json());

  return defer({
    projects: await projectsPromise,
    dashboard: await dashboardPromise,
    comments: commentsPromise,
    replies: repliesPromise,
  });
};
