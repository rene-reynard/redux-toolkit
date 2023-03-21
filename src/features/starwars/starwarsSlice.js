import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  factNumber: 3,
  facts: [
    'прообразом Чубакки стал пёс режиссёра',
    'актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
  ]
};

export const starwarsSlice = createSlice({
  name: 'starwars',
  initialState,
  reducers: {
    setFactNumber: (state, action) => {
      const newNumber = action.payload
      if (newNumber >=1 && newNumber <= state.facts.length)
        {
        state.factNumber = newNumber;
        };
    }
  },
});

export const { setFactNumber } = starwarsSlice.actions;
export const selectFacts = (state) => (state.starwars.facts.slice(0, state.starwars.factNumber));
export const selectFactNumber = (state) => state.starwars.factNumber;

export default starwarsSlice.reducer;