<script lang="ts">
  import { isDark } from '@/src/lib/store';
  import Intro from './lib/components/Intro.svelte';
  import Navbar from './lib/components/Navbar.svelte';
</script>

<Navbar />
<div
  class={`h-full flex flex-col pt-20 items-start lg:grid lg:grid-cols-2 lg:px-2 lg:grid-rows-2 lg:gap-y-20 lg:gap-x-4 ${
    $isDark ? 'bg-my-dark' : 'bg-my-light'
  }`}
>
  <Intro />
</div>

<style>
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
