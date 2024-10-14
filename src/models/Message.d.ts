interface Message {
  id: string;
  author: "user" | "bot";
  avatar: string;
  content: string;
}
