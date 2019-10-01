import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import AlertTraditional from '../../components/alerts/AlertTraditional.svelte';
import AlertModern from '../../components/alerts/AlertModern.svelte';
import AlertLeftAccent from '../../components/alerts/AlertLeftAccent.svelte';
import AlertTitled from '../../components/alerts/AlertTitled.svelte';
import AlertSolid from '../../components/alerts/AlertSolid.svelte';
import AlertTopAccentBorder from '../../components/alerts/AlertTopAccentBorder.svelte';
import AlertBanner from '../../components/alerts/AlertBanner.svelte';
import markdownNotes from './alerts.stories.md';

storiesOf('Alerts | Alerts', module)
    //Modern Alert
    .add(
        'Modern',
        () => ({
            Component: AlertModern,
            props: {
                mainText: 'This is not an error!',
                secondaryText:
                    'This is a working demo, check other alerts as well.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    )
    //Traditional Alert
    .add(
        'Traditional',
        () => ({
            Component: AlertTraditional,
            props: {
                mainText: 'This is not an error!',
                secondaryText:
                    'This is a working demo, check other alerts as well.',
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
                mainText: 'This is not an error!',
                secondaryText:
                    'This is a working demo, check other alerts as well.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    )
    //Titled Alert
    .add(
        'Titled',
        () => ({
            Component: AlertTitled,
            props: {
                mainText: 'This is not an error!',
                secondaryText:
                    'This is a working demo, check other alerts as well.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Solid Alert
    .add(
        'Solid',
        () => ({
            Component: AlertSolid,
            props: {
                mainText: 'This is not an error!',
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Top Accent Border Alert
    .add(
        'Top Accent Border',
        () => ({
            Component: AlertTopAccentBorder,
            props: {
                mainText: 'This is not an error!',
                secondaryText:
                    'This is a working demo, check other alerts as well.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Banner Alert
    .add(
        'Banner',
        () => ({
            Component: AlertBanner,
            props: {
                mainText: 'This is not an error!',
                secondaryText:
                    'This is a working demo, check other alerts as well.',
            },
        }),
        { notes: { markdown: markdownNotes } },
    );
