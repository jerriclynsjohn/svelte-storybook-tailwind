<script>
    export let prev = 'Prev';
    export let next = 'Next';
</script>

<div class="inline-flex">
    <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4
        rounded-l">
        {prev}
    </button>
    <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4
        rounded-r">
        {next}
    </button>
</div>
