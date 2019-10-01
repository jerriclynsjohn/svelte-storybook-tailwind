import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import ButtonOutline from '../../components/buttons/ButtonOutline.svelte';
import ButtonPill from '../../components/buttons/ButtonPill.svelte';
import ButtonSimple from '../../components/buttons/ButtonSimple.svelte';
import ButtonBordered from '../../components/buttons/ButtonBordered.svelte';
import ButtonDisabled from '../../components/buttons/ButtonDisabled.svelte';
import Button3D from '../../components/buttons/Button3D.svelte';
import ButtonElevated from '../../components/buttons/ButtonElevated.svelte';
import ButtonGroups from '../../components/buttons/ButtonGroups.svelte';
import ButtonIcon from '../../components/buttons/ButtonIcon.svelte';
import markdownNotes from './buttons.stories.md';

storiesOf('Buttons | Buttons', module)
    //Simple Button
    .add(
        'Simple',
        () => ({
            Component: ButtonSimple,
            props: { text: 'Button' },
            on: {
                customEventHandler: action('This custom event handler works'),
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Pill Button
    .add(
        'Pill Button',
        () => ({
            Component: ButtonPill,
            props: { text: 'Button' },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Outline Button
    .add(
        'Outline Button',
        () => ({
            Component: ButtonOutline,
            props: { text: 'Button' },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Bordered Button
    .add(
        'Bordered Button',
        () => ({
            Component: ButtonBordered,
            props: { text: 'Button' },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Disabled Button
    .add(
        'Disabled Button',
        () => ({
            Component: ButtonDisabled,
            props: { text: 'Button' },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //3D Button
    .add(
        '3D Button',
        () => ({
            Component: Button3D,
            props: { text: 'Button' },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Elevated Button
    .add(
        'Elevated Button',
        () => ({
            Component: ButtonElevated,
            props: { text: 'Button' },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Button Groups
    .add(
        'Button Groups',
        () => ({
            Component: ButtonGroups,
            props: { prev: 'Prev', next: 'Next' },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Button Icon
    .add(
        'Button Icon',
        () => ({
            Component: ButtonIcon,
            props: { text: 'Download' },
        }),
        { notes: { markdown: markdownNotes } },
    );
