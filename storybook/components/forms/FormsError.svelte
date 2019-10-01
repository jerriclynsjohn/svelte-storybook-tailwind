<script>
    export let title = '';
    export let placeholder = '';
    export let errorMessage = '';
</script>

<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold
        mb-2"
        for="grid-first-name">
        {title}
    </label>
    <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border
        border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white"
        id="grid-first-name"
        type="text"
        {placeholder} />
    <p class="text-red-500 text-xs italic">{errorMessage}</p>
</div>
