import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Example Chart</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/chart_render"
          class="mx-auto my-4 h-96"
          alt="an example chart provided as an image"
        />
      </div>
    </>
  );
}
