export const fetchPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/posts"
  );
  const result = await response.json();
  return result;
};
