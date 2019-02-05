import { INCREASE, DECREASE } from "../constants";

const initialState = {
  current: 0
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case INCREASE:
      return { current: state.current + 1 };
    case DECREASE:
      return { current: state.current - 1 };
    default:
      return state;
  }
}
