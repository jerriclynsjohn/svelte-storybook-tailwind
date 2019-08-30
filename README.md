# Svelte + Storybook + Tailwind Starter Pack

[Storybook](https://storybook.js.org/) is an open source tool for developing JavaScript UI components in isolation

[Svelte](https://svelte.dev/) is a component framework that allows you to write highly-efficient, imperative code, that surgically updates the DOM to maintain performance.

## Steps to build

1. Clone this repo `git clone https://github.com/jerriclynsjohn/svelete-storybook-tailwind.git`
2. Go to the directory `cd svelete-storybook-tailwind`
3. Install dependencies `npm install`
4. To develop your Svelete App: `npm run dev`
5. To develop UI components independant of your app: `npm run stories`

## Steps to build it all by yourself and some tips

### Instantiate Svelte App

1. Start the template file using `npx degit sveltejs/template svelete-storybook-tailwind`
2. Go to the directory `cd svelete-storybook-tailwind`
3. Install dependencies `npm install`
4. Try run the svelete app `npm run dev`

### Add Storybook into the Svelete Project

1. Add Storybook dependencies `npm install @storybook/svelte --save-dev`
2. Add 2 commonly used Storybook [Addons](https://storybook.js.org/addons/): 
    - [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions): `npm install @storybook/addon-actions --save-dev`
    - [Links](https://github.com/storybookjs/storybook/tree/master/addons/links): `npm install @storybook/addon-links --save-dev`
3. Make sure you have babel and svelete-loader dependencies `npm install babel-loader @babel/core svelte-loader --save-dev`
4. Add npm script in your `package.json`

```bash
{
    "scripts": {
        // Rest of the scripts
        "stories": "start-storybook",
        "build-stories": "build-storybook"
    }
}
```

5. Create a config file at the root `.storybook/config.js` with the following content:

```javascript
import { configure } from '@storybook/svelte';

// automatically import all files ending in *.stories.js
const req = require.context('../storybook/stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```

6. Create an addon file at the root `.storybook/addons.js` with the following content and keep adding additional addons in this file.

```javascript
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
```

7. Write your Svelte component in `storybook\components` and yes you can use your regular `.svelte` file. The only thing is that you cant use templates in a story yet, not supported, but yes you can compose other components together. For the starter pack lets just create a clickable button.

```html
<script>
  import { createEventDispatcher } from 'svelte';
  
  export let text = '';

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event)
  }
</script>

<style>
    .button {
      border: 1px solid #eee;
      border-radius: 3px;
      backgroundColor: #FFFFFF;
      cursor: pointer;
      font-size: 15px;
      padding: 3px 10px;
      margin: 10px;
    }
</style>

<button class="button" on:click={onClick}>
    {text}
</button>
```

8. Write your stories in `storybook/stories` and you can name any number of story file with `<anything>.stories.js`, for the starter package we can create stories of `Button` when it shows `with text` and when it shows `with some emojis`:

```javascript
import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Button from '../components/button.svelte';

storiesOf('Button', module)
  .add('with text', () => ({
    Component: Button,
    props: { text: 'Hello Button' },
    on: { click: action('clicked') },
  }))
  .add('with some emoji', () => ({
    Component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
    on: { click: action('clicked') },
  }));
```

9. Run your storyboard `npm run stories`
