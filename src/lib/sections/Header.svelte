<script>
    import Button from '../atoms/Button.svelte';
    import Icon from '../atoms/Icon.svelte';
    import Logo from '../../assets/logo.svg';
</script>

<div class="flex items-center justify-between px-16 py-6">
    <img class="h-12" src={Logo} alt="Logo" />
    <Button right type="secondary" href="https://sst-story.sveltehub.dev"
        >UI Doc<Icon symbol="link" type="dark" /></Button>
</div>
