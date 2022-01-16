<script>
    import {createEventDispatcher} from 'svelte';
    /**
     * Is this the principal call to action on the page?
     */
    export let primary = false;

    /**
     * What background color to use
     */
    export let backgroundColor;
    /**
     * How large should the button be?
     */
    export let size = 'medium';
    /**
     * Button contents
     */
    export let label = '';

    let mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    let style = backgroundColor ? `background-color: ${backgroundColor}` : '';

    const dispatch = createEventDispatcher();

    /**
     * Optional click handler
     */
    function onClick(event) {
        dispatch('click', event);
    }
</script>

<button
    type="button"
    class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    {style}
    on:click={onClick}
>
    {label}
</button>

<style>
    .storybook-button {
        @apply font-sans font-bold rounded-full border-0 cursor-pointer inline-block;
    }
    .storybook-button--primary {
        @apply text-white bg-green-600;
    }
    .storybook-button--secondary {
        @apply text-gray-900 bg-transparent border-[1px];
    }
    .storybook-button--small {
        font-size: 12px;
        padding: 10px 16px;
    }
    .storybook-button--medium {
        font-size: 14px;
        padding: 11px 20px;
    }
    .storybook-button--large {
        font-size: 16px;
        padding: 12px 24px;
    }
</style>
