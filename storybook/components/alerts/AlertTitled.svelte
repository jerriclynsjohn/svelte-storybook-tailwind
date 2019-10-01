<script>
    export let mainText = '';
    export let secondaryText = '';
</script>

<div role="alert">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        {mainText}
    </div>
    <div
        class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3
        text-red-700">
        <p>{secondaryText}</p>
    </div>
</div>
