// start from 29

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionTypes {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR",
}

interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
