import { useMemo } from "react";
import {
  useParams,
  useLocation,
  // useHistory,
  // useRouteMatch,
} from "react-router-dom";
import queryString from "query-string";

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  // const history = useHistory();
  // const match = useRouteMatch();

  return useMemo(() => {
    return {
      // push: history.push,
      // replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      // match,
      location,
      // history,
    };
  }, [params, location]);
};

export default useRouter;
