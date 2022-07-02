<<<<<<< HEAD
export const selectorFlightsCaption = (state) => {

}
=======
export const selectFlightCaption = async (state) => {
  const data = await state.flight;
  return data;
};
>>>>>>> 09dc2615ce2e1d698cf81d8a040621127b0d29ad
