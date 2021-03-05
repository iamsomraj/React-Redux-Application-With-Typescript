import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const seachRepositories = (term: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({
    type: ActionType.SEARCH_REPOSITORIES,
  });

  try {
    const { data } = await axios.get(
      "http://registry.npmjs.com/-/v1/search?text=" + term
    );

    const names = data.objects.map((result: any) => result.package.name);

    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
      payload: names,
    });
  } catch (error) {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES_ERROR,
      payload: error.message,
    });
  }
};
