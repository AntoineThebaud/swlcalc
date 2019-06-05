![swlcalc](/public/assets/images/logos/swlcalc_w200.png)
=======

swlcalc is a fan-made gear planner for Secret World Legends (SWL), a MMORPG by Funcom. It can be used to plan your gear progression, to visualize the stats you will reach with a given gear and also to share and show others what gear you use to tackle encounters in PvE or PvP.

swlcalc can be found at : http://AntoineThebaud.github.io/swlcalc

This project is still under development. Some features to be released can be found in the [swlcalc features board](https://github.com/AntoineThebaud/swlcalc/projects/1). Feel free to suggest new features in the [issues](https://github.com/AntoineThebaud/swlcalc/issues) !

# Contributing

Pull requests are welcome! All active development of swlcalc takes place in the [`develop`](https://github.com/AntoineThebaud/swlcalc/tree/develop) branch. The tip of [`master`](https://github.com/AntoineThebaud/swlcalc/tree/master) always points to the latest, stable release. All releases are tagged. The latest release is deployed to the [`gh-pages`](https://github.com/joakibj/tswcalc/tree/gh-pages) branch.

Contributions can also be bug reports, feature requests and other feedback !

## Prerequisites

First, download and install [Node.js](http://nodejs.org/).

Then install `grunt` globally :

    npm install -g grunt-cli

## Building

Fetch the source code (if you have added a [SSH key to github](https://help.github.com/articles/generating-ssh-keys)) :

    git clone git@github.com:AntoineThebaud/swlcalc.git

Alternatively :

    git clone https://github.com/AntoineThebaud/swlcalc.git

Install swlcalc dependencies, defined in `package.json` :

    npm install

Build swlcalc by running :

    grunt

Run tests :

    grunt test

Tests can be found in the `test` folder. Open the html file to run tests in the browser. Open the js file to view the test logic.

When developing, use:

    grunt watch

The previous command monitors changes to files in the `src` folder. If any changes are detected, the build task is run.

Open `build/index.html` to view.

## Distribution

To create a distribution in the `dist` folder :

    grunt dist

Open `dist/index.html` to view.

To create a zip-archive distribution:

    grunt package

## License

MIT License for the source code. Please see the LICENSE file.

All art assets included in `public/assets/images/icons/` should be considered property of Funcom GmBH unless otherwise noted. A small sample of signet, glyph and equipment icons are redistributed under fair use.

# Acknowledgements

swlcalc was built from [tswcalc](https://github.com/joakibj/tswcalc), a gear planner designed for The Secret World (TSW). Thanks to [Joakibj](https://github.com/joakibj) and all the contributors of this project that made possible to create a gear planner for Secret World Legends without starting from scratch.
