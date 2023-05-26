// import apiClient from "./apiClient";

class Service {
  static new() {
    console.log("Log from service class");
  }
}

export default class NewService extends Service {
  static serviceName = '/todos'

  static get() {
    console.log(`Get items from service`);
  }

  static delete(id) {
    console.log(`Delete item with id:${id}`);
  }

  static post(item) {
    console.log(`Post item: ${item}`);
  }

  static hello() {
    super.new();
    return apiClient.get("/users")
  }

  static oneTodo(id) {
    return apiClient.get(`${this.serviceName}/${id}`)
  }

  static allTodos() {
    return apiClient.get(`${this.serviceName}/`)
  }
}
