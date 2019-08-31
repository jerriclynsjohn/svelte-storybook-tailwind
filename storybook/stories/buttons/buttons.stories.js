import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import ButtonOutline from '../../components/buttons/buttons-outline.svelte';
import ButtonPill from '../../components/buttons/buttons-pill.svelte';
import ButtonSimple from '../../components/buttons/buttons-simple.svelte';
import markdownNotes from './buttons.stories.md';

storiesOf('Buttons | Buttons', module)
    //Simple Button
    .add(
        'Simple',
        () => ({
            Component: ButtonSimple,
            props: { text: 'Button' },
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
    );
