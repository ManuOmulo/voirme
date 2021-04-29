import { CHANGE_IS_VISIBLE } from "../constants/navbarConstant"

export const setIsVisible = (text) => ({
  type: CHANGE_IS_VISIBLE,
  payload: text
})