<script>
    import {Meta, Story} from '@storybook/addon-svelte-csf';

    import Button from './Button.svelte';
    import Icon from './Icon.svelte';
</script>

<Meta title="Design System/Atoms/Button" component={Button} />

<!-- Primary -->
<Story name="Primary">
    <Button href="https://google.com">Primary</Button>
</Story>
<Story name="Primary with icon on left">
    <Button left href="https://google.com"><Icon symbol="github" />Github</Button>
</Story>
<Story name="Primary with icon on right">
    <Button right href="https://google.com">Github<Icon symbol="github" /></Button>
</Story>

<!-- Secondary -->
<Story name="Secondary">
    <Button type="secondary" href="https://google.com">Github</Button>
</Story>
<Story name="Secondary with icon on left">
    <Button left type="secondary" href="https://google.com"
        ><Icon symbol="github" type="dark" />Github</Button>
</Story>
<Story name="Secondary with icon on right">
    <Button right type="secondary" href="https://google.com"
        >Github<Icon symbol="github" type="dark" /></Button>
</Story>
