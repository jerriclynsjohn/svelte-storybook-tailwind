<script>
    import { createEventDispatcher } from 'svelte';
    export let text = '';

    const dispatch = createEventDispatcher();
    
    function onClick(event) {
      dispatch('click', event);
    }
</script>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={onClick}>
  {text}
</button>