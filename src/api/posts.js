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
    `https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/posts/${postId}`
  );
  const result = await response.json();
  return result.data.posts;
};
