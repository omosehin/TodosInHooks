export const dataFetchReducer = (fetchingstate, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...fetchingstate,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...fetchingstate,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...fetchingstate,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };