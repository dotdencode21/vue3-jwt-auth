export const signUp = async (body) => {
  const response = await fetch("http://localhost:3000/api/sign-up", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  const { token } = await response.json();
    
  localStorage.setItem("token", token);
} 

export const signIn = async (body) => {
  const response = await fetch("http://localhost:3000/api/sign-in", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
    
  const data = await response.json();

  return data;
}