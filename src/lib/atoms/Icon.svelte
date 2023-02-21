<script>
    /**
     * Specify the kind of icon
     * @type {'github' | 'star' | 'fork' | 'link'}
     */
    export let symbol = 'github';

    /**
     * Specify the kind of icon
     * @type {'light' | 'dark' }
     */
    export let type = 'light';

    $: typeCoding = type === 'light' ? 'stroke-white' : 'stroke-slate-600';
</script>

{#if symbol === 'github'}
    <svg
        class={`h-5 w-5 stroke-2 ${typeCoding}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <g clip-path="url(#a)">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
{:else if symbol === 'star'}
    <svg
        class={`h-5 w-5 stroke-2 ${typeCoding}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.951 2.927c-.299-.92-1.602-.92-1.902 0L9.53 7.601a1 1 0 0 1-.95.69H3.664c-.968 0-1.372 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.674c-.3.921.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.976 2.888c.783.57 1.838-.196 1.538-1.118l-1.518-4.674a1 1 0 0 1 .363-1.118l3.976-2.888c.783-.57.381-1.81-.588-1.81H15.42a1 1 0 0 1-.95-.69l-1.519-4.674Z" />
    </svg>
{:else if symbol === 'fork'}
    <svg
        class={`h-5 w-5 stroke-2 ${typeCoding}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 9v12m7-15h3a2 2 0 0 1 2 2v7M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
{:else if symbol === 'link'}
    <svg
        class={`h-5 w-5 stroke-2 ${typeCoding}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
{/if}
