import { PromptBody } from "../models";

export const savePrompt = async (body: PromptBody) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("Failed to generate answer. Please try again later");
  }
};

export const fetchMessages = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/messages`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};
