import _ from "lodash";
import { ActionEnum } from "../../type";
import { ActionIE, GlobalIE } from "../../interface";
import { initGlobalState } from "./default";

export default function globalStore(
  state: GlobalIE = initGlobalState,
  action: ActionIE
) {
  switch (action.type) {
    case ActionEnum.SET_AD_CONTAINER:
      return _.merge({}, state, {
        isShowAdContainer: action.value,
      });

    case ActionEnum.SET_MODAL_ITEM:
      return _.merge({}, state, {
        modalItem: action.value,
      });

    default:
      return state;
  }
}
