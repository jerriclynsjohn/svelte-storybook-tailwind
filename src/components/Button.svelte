<script>
    export let text = '';
</script>

<button class="btn-outline btn-outline-color">{text}</button>

<style>
    .btn-outline {
        @apply font-semibold py-2 px-4;
    }

    .btn-outline-color {
        @apply bg-transparent text-blue-700 border border-blue-500 rounded;
    }

    .btn-outline-color:hover {
        @apply bg-red-500 text-white border-transparent;
    }
</style>
