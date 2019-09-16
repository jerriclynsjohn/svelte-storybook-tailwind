import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import AlertTraditional from '../../components/alerts/alert-traditional.svelte';
import AlertModern from '../../components/alerts/alert-modern.svelte';
import AlertLeftAccent from '../../components/alerts/left-accent.svelte';
import markdownNotes from './utils.stories.md';

storiesOf('Alerts | Alerts', module)
    //Traditional Alert
    .add(
        'Traditional',
        () => ({
            Component: AlertTraditional,
            props: {
                mainText: 'Holy smokes!',
                secondaryText: 'Something seriously bad happened.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Modern Alert
    .add(
        'Modern',
        () => ({
            Component: AlertModern,
            props: {
                mainText: 'Holy smokes!',
                secondaryText: 'Something seriously bad happened.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Left Accent Border Alert
    .add(
        'Left Accent Border',
        () => ({
            Component: AlertLeftAccent,
            props: {
                mainText: 'Holy smokes!',
                secondaryText: 'Something seriously bad happened.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    );
