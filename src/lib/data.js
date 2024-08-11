const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "ESLint is a great tool for enforcing code formatting rules. There are four separate rules just for semicolons! In this tutorial I will enable all four with some options and show what it looks like when the rules are broken.",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2",
    body: "ESLint is a great tool for enforcing code formatting rules. There are four separate rules just for semicolons! In this tutorial I will enable all four with some options and show what it looks like when the rules are broken.",
    userId: 1,
  },
  {
    id: 4,
    title: "Post 4",
    body: "ESLint is a great tool for enforcing code formatting rules. There are four separate rules just for semicolons! In this tutorial I will enable all four with some options and show what it looks like when the rules are broken.",
    userId: 2,
  },
  {
    id: 3,
    title: "Post 3",
    body: "ESLint is a great tool for enforcing code formatting rules. There are four separate rules just for semicolons! In this tutorial I will enable all four with some options and show what it looks like when the rules are broken.",
    userId: 2,
  },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};
export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
