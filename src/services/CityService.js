export const CityService = {
  getData() {
      return [
          { name: 'Москва', },
          { name: 'Санкт-Петербург', },
          { name: 'Нижний-Новгород', },
          { name: 'Калининград', },
          { name: 'Владивосток', },
      ];
  },

  getCities() {
      return Promise.resolve(this.getData());
  }
};
