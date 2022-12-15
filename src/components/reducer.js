const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW1":
      return { ...state, show1: !state.show1 };
    case "SHOW2":
      return { ...state, show2: !state.show2 };
    case "SHOW3":
      return { ...state, show3: !state.show3 };
    case "SHOW4":
      return { ...state, show4: !state.show4 };
    case "SHOW5":
      return { ...state, show5: !state.show5 };
    case "SHOW6":
      return { ...state, show6: !state.show6 };
    default:
      throw new Error();
  }
};

export default reducer;
