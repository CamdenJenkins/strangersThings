export const fetchPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/posts"
  );
  const result = await response.json();
  return result;
};

export const makePost = async (
  token,
  title,
  description,
  price,
  willDeliver
) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const deletePostById = async (postId, token) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = response.json();
  return result;
};

export const getPostById = async (postId) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/posts/`
  );
  const result = await response.json();
  const filteredPosts = result.data.posts.filter((post) => {
    return post._id === postId;
  });
  return filteredPosts[0];
};

export const fetchMessage = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/users/me",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};
