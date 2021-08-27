<script lang="ts">
  import { isDark } from '../store';
</script>

<nav
  class={`fixed w-full flex flex-row justify-between items-center opacity-95 py-4 pl-2 sm:pl-4 md:pl-16 border-b-2 border-my-red ${
    $isDark ? 'bg-my-dark' : 'bg-my-light'
  }`}
>
  <p class="font-normal md:font-normal text-my-red text-sm md:text-xl">
    <a href="https://google.com"> <b>Mocchapine</b> | Rayhan Hamada </a>
  </p>
</nav>
