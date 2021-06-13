import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE } from "../../interface";
import { ContentsIE } from "../../../api/GetAPI/interface";
import { initContentState } from "./default";

export default function contentsStore(
  state: ContentsIE[] = initContentState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.GET_CONTENTS:
      return _.merge([], state, {
        contents: action.value,
      });

    default:
      return state;
  }
}
