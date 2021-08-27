<script lang="ts">
  import { githubSecret } from '@/src/globals';

  import ky from 'ky';

  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { isDark } from '../store';

  const projects = writable<string[]>([]);

  onMount(() => {
    ky.get('https://api.github.com/users/rayhanhamada/repos', {
      searchParams: { per_page: 100 },
      headers: {
        Authorization: `bearer ${githubSecret}`,
        Accept: 'application/vnd.github.mercy-preview+json',
      },
      hooks: {
        afterResponse: [
          async (_req, _opt, res) => {
            projects.set(
              ((await res.json()) as { name: string; topics: string[] }[])
                .filter((p) => p.topics.includes('for-portfolio'))
                .map((p) => p.name)
            );
          },
        ],
      },
    });
  });
</script>

<div class="flex flex-col w-full items-center space-y-3">
  <p class="text-my-red text-2xl">Projects</p>
  <div class="flex flex-col w-full">
    <div
      class="grid grid-cols-1 w-full items-center gap-y-3 md:gap-x-4 md:grid-cols-2 md:grid-rows-3"
    >
      {#each $projects as name}
        <a
          class="md:w-60 lg:w-full md:place-self-center border border-my-red"
          v-for="p in projects"
          href={`https://github-readme-stats.vercel.app/api/pin/?username=rayhanhamada&repo=${name}&show_owner=true&theme=${
            $isDark ? 'monokai' : ''
          }&title_color=e41749`}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=rayhanhamada&repo=${name}&show_owner=true&theme=${
              $isDark ? 'monokai' : ''
            }&title_color=e41749`}
            alt=""
          />
        </a>
      {/each}
    </div>
  </div>
</div>

<style></style>
