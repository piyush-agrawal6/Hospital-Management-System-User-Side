import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import bookingReducer from "./booking/reducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
});
