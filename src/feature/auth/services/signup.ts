type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export const signup = async (formData: FormData, BASE_URL: string) => {
  const payload = {
    firstname: formData.firstName,
    lastname: formData.lastName,
    email: formData.email,
    password: formData.password,
  };
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const SignUpData = await response.json();

  if (!response.ok) {
    throw new Error(SignUpData.message || "Signup failed");
  } else if (response.status !== 200 && response.status !== 201) {
    throw new Error(SignUpData.message || "Signup failed");
  }

  return SignUpData.data;
};
