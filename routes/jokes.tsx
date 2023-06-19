// routes/jokes.tsx
import { handler as getJokes } from "./api/joke.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const resp = getJokes();
    const joke = await resp.text();
    return ctx.render(joke);
  },
};

export default function Page({ data }) {
  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
}