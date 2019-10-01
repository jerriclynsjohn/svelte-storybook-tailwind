import '../../css/utils.css';

import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import FormsCustomSelect from '../../components/forms/FormsCustomSelect.svelte';
import FormsPassword from '../../components/forms/FormsPassword.svelte';
import FormsError from '../../components/forms/FormsError.svelte';
import markdownNotes from './forms.stories.md';

storiesOf('Forms | Forms', module)
    //Custom Select
    .add(
        'Custom Select',
        () => ({
            Component: FormsCustomSelect,
            props: {
                options: ['Hello', 'Again', 'Now', 'Check', 'This', 'Out'],
            },
            on: {
                customEventHandler: action('This custom event handler works'),
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Password
    .add(
        'Password',
        () => ({
            Component: FormsPassword,
            props: {
                title: 'Write your Password',
                desc: "Make it as long and as crazy as you'd like",
            },
            on: {
                customEventHandler: action('This custom event handler works'),
            },
        }),
        { notes: { markdown: markdownNotes } },
    )

    //Form Error
    .add(
        'Input Error',
        () => ({
            Component: FormsError,
            props: {
                title: 'Full Name',
                placeholder: 'eg. Sane Jane',
                errorMessage: 'This is your red error message',
            },
            on: {
                customEventHandler: action('This custom event handler works'),
            },
        }),
        { notes: { markdown: markdownNotes } },
    );
