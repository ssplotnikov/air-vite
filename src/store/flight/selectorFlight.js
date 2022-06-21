export const selectFlightCaption = async (state) => {
  const data = await state.flight;
  return data;
};
