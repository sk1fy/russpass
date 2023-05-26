// import apiClient from "./apiClient";

export default {
  getPosts(perPage = 10) {
    return apiClient.get("/posts?_limit=" + perPage)
  },
  getPost(id) {
    return apiClient.get("/posts/" + id);
  },
  postPost(post) {
    return apiClient.post("/posts", post);
  },
};