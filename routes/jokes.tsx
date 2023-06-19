// routes/jokes.tsx
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const resp = await fetch('https://kondoumh-my-fresh-app.deno.dev/api/joke');
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