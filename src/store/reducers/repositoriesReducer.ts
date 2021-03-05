import {
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_ERROR,
  SEARCH_REPOSITORIES_SUCCESS,
} from "../actiontypes/actiontypes";

interface RepositoriesState {
  loading: boolean;
  error: Error | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: payload,
      };
    case SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
