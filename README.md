# StayPuft

A programming-oriented theme for [Ghost](https://github.com/TryGhost/Ghost). This is the latest development version of StayPuft. If you're just looking to download the latest release, head over to the [releases](https://github.com/dlecina/StayPuft/releases) page.

![screenshot-desktop](https://user-images.githubusercontent.com/120485/27221326-1e31d326-5280-11e7-866d-82d550a7683b.jpg)

## Demo

This theme is being used in my [blog](http://davidlecina.com/).

*  ["Welcome to Ghost"](http://davidlecina.com/blog/welcome-to-ghost/).
*  ["Using the Ghost editor"](http://davidlecina.com/blog/the-editor//).
*  ["Advanced Markdown tips"](http://davidlecina.com/blog/advanced-markdown/).
*  [Prism demo](http://davidlecina.com/blog/prism-demo/).


## Development

StayPuft styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node and Gulp installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

You can keep Ghost running in your [local development environment](https://docs.ghost.org/docs/install-local) by running this from Ghost's root directory:

```bash
nodemon current/index.js --watch content/themes/StayPuft --ext hbs,js,css
```

## Releasing

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ yarn zip
```

# Copyright & License

Copyright (c) 2013-2018 Ghost Foundation - Released under the [MIT license](LICENSE).  
Copyright (c) 2014-2018 David Lecina Fuentes - Released under the [MIT license](LICENSE).  
