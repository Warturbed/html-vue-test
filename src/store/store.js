import { createStore } from 'vuex'
import data from '@/data/list';

export default createStore({
  state: {
    data: [],
    history: []
  },
  mutations: {
    // При получении данные отправляем как в основной массив, так и в массив истории
    SET_DATA_TO_STATE: (state, data) => {
      state.data = data
      state.history.push(data)
    },
    PAST_DATA_TO_STATE(state) {
      // Если длина массива больше нуля
      if (state.history.length-1 > 0) {
        // Обрезаем последний элемент массива истории
        state.history.splice(state.history.length-1,1)
        // Основной массив приравниваем массиву истории
        state.data = state.history[state.history.length-1]
      }
    },
  },
  actions: {
    // Можно первые 2 функции объединить, но вдруг когда-нибудь
    // первая функция будет принимать данные с сервера, а не из файла
    GET_DATA_FROM_API({commit}) {
      commit('SET_DATA_TO_STATE', data);
    },
    CHANGE_STATE({commit}, data) {
      commit('SET_DATA_TO_STATE', data);
    },
    CHANGE_PAST_DATA({commit}) {
      commit('PAST_DATA_TO_STATE');
    },
  },
  getters: {
    DATA(state) {
      return state.data;
    },
    HISTORY(state) {
      return state.history;
    }
  }
})
