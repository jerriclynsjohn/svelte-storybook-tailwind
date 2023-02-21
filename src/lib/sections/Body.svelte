<script>
    import Pill from '../atoms/Pill.svelte';
    import H1 from '../atoms/H1.svelte';
    import Button from '../atoms/Button.svelte';
    import Icon from '../atoms/Icon.svelte';
</script>

<div class="flex w-full flex-col gap-10 md:w-2/4">
    <div class="flex flex-col items-start gap-4 ">
        <Pill>Svelte + TailwindCSS + Storybook</Pill>
        <H1>Svelte Starter Kit</H1>
        <p class="text-2xl text-slate-500">
            The best frameworks are the ones where teams can get started without any hassles. With
            this kit you can get started now!
        </p>
    </div>
    <div class="flex gap-5">
        <Button left href="https://github.com/jerriclynsjohn/svelte-storybook-tailwind"
            ><Icon symbol="github" />Github</Button>
        <Button
            type="secondary"
            left
            href="https://github.com/jerriclynsjohn/svelte-storybook-tailwind/fork"
            ><Icon symbol="fork" type="dark" />Fork</Button>
    </div>
</div>
