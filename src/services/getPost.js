export const getPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => result.json())
    .then((post) => {
      return post;
    });
};
