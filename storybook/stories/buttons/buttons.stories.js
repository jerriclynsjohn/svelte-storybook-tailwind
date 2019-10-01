import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import ButtonOutline from '../../components/buttons/ButtonOutline.svelte';
import ButtonPill from '../../components/buttons/ButtonPill.svelte';
import ButtonSimple from '../../components/buttons/ButtonSimple.svelte';
import ButtonBordered from '../../components/buttons/ButtonBordered.svelte';
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
    );
