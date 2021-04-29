import { CHANGE_IS_VISIBLE } from "../constants/navbarConstant"

const initialStateVisible = {
  isVisible: false
}

export const navbarReducer = (state=initialStateVisible, action={}) => {
  switch(action.type) {
    case CHANGE_IS_VISIBLE:
      return { ...state, isVisible: action.payload }

    default:
      return state
  }
}