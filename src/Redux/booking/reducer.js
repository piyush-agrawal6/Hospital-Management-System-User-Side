import * as types from "./types";

const initialState = {
  bookingLoading: false,
  booking: [],
};

export default function bookingReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case types.CREATE_BOOKING_REQUEST:
      return {
        ...state,
        bookingLoading: true,
      };
    case types.CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        bookingLoading: false,
        booking: [...state.booking, payload],
      };
    default:
      return state;
  }
}
