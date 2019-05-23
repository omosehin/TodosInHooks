export const ShowReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "COMPLETE":
      return "COMPLETE";
    case "INCOMPLETE":
      return "INCOMPLETE";

    default:
      throw new Error();
  }
};
