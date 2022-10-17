export const registerUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const fetchMe = async (token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-PT-FTB-WEB-FT/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};
