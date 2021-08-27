<script lang="ts">
  import { onMount } from 'svelte';
  import ky from 'ky';
  import { writable } from 'svelte/store';
  import { githubSecret } from '../../globals';

  let src = writable('');

  onMount(() => {
    ky.get('https://api.github.com/users/rayhanhamada', {
      headers: {
        Authorization: `bearer ${githubSecret}`,
      },
      hooks: {
        afterResponse: [
          async (_req, _opt, res) => {
            const { avatar_url } = (await res.json()) as { avatar_url: string };
            src.set(avatar_url);
          },
        ],
      },
    });
  });
</script>

<div
  class="about flex flex-col h-auto justify-center items-center md:flex-row md:pt-10 space-y-5 md:space-x-10 lg:border-r-1 lg:border-my-red"
>
  <img
    class="shadow rounded-full w-24 md:w-48 h-auto align-middle border-my-dark-darker"
    alt="profile"
    src={$src}
  />
  <div class="flex flex-col justify-start items-center md:items-start">
    <p class="text-my-red text-2xl md:text-4xl">Wello There !</p>
    <p class="text-my-red text-sm md:text-base">
      My name is Muhammad Rayhan Hamada Budiman.
    </p>
    <p class="text-my-red text-sm md:text-base">
      I like to code, playing games and frequently, cooking and try new recipes.
    </p>
  </div>
  <p class="text-my-red" />
</div>
