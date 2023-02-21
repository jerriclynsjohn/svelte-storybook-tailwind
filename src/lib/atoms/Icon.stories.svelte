<script>
    import {Meta, Story} from '@storybook/addon-svelte-csf';

    import Icon from './Icon.svelte';
</script>

<Meta title="Design System/Atoms/Icon" component={Icon} />

<!-- Light -->
<Story name="Github - Light">
    <Icon symbol="github" />
</Story>
<Story name="Github - Dark">
    <Icon type="dark" symbol="github" />
</Story>

<!-- Symbols -->
<Story name="Star - Dark">
    <Icon type="dark" symbol="star" />
</Story>
<Story name="Fork - Dark">
    <Icon type="dark" symbol="fork" />
</Story>
<Story name="Link - Dark">
    <Icon type="dark" symbol="link" />
</Story>
