export const initialState = {
  primaryColor: "#80D0C7",
  secondaryColor: "#0093E9",
  angle: 0,
  percentage: [40, 60],
};

export const types = {
  secondaryColor: "secColor",
  primaryColor: "priColor",
  angle: "angle",
  percentage: "percentage",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case types.secondaryColor:
      return { ...state, secondaryColor: action.value };

    case types.primaryColor:
      return { ...state, primaryColor: action.value };

    case types.angle:
      return { ...state, angle: action.value };

    case types.percentage:
      return { ...state, percentage: action.value };
    default:
      break;
  }
};
