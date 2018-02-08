swlcalc
=======

swlcalc is a fan-made gear planner for Secret World Legends (SWL), a MMORPG by Funcom. It can be used, to plan your gear progression, to visualize which stats you will reach at a given level and also to share and show others what gear you use to tackle encounters in PvE or PvP.

*This project is still on early phase of development. No release is available yet.*

**swlcalc features:**
* All custom gear from level 1 Standard to level 70 Legendary. [TODO : add gear with passive effects]
* All glyphs from level 1 Standard to level 20 Legendary.
* Item Power calculation.
* Total stats calculation [TODO : phys & mag prot]

**Coming features:**
* All signets from level 1 Standard to level 20 Legendary. [TODO : add swl signets]
* All gadgets. [TODO : Nothing done]
* Stats ratio calculation. [TODO : formulas to update]
* Anima allocation. [TODO : Nothing done]
* Gear cost calculation (XP, MoF, Shards) [TODO : Nothing done]

Once released, swlcalc will be hosted at http://AntoineThebaud.github.io/swlcalc.

**Notes:** swlcalc was created from [tswcalc](https://github.com/joakibj/tswcalc), a gear planner designed for The Secret World (TSW). All active development of swlcalc takes place in the [`develop`](https://github.com/AntoineThebaud/swlcalc/tree/develop) branch. The tip of [`master`](https://github.com/AntoineThebaud/swlcalc/tree/master) always points to the latest, stable release. All releases are tagged. The latest release is deployed to the [`gh-pages`](https://github.com/joakibj/tswcalc/tree/gh-pages) branch.

Prerequisites
--------
The tools needed to build swlcalc are:
* [node.js](http://nodejs.org/) (v0.10.45)
* npm (v2.15.1)
* [grunt](http://gruntjs.com/) (v0.4.1)

Install and use [nvm](https://github.com/creationix/nvm) to manage your node.js and npm installations.

Installing the correct node.js version:

    nvm install 0.10.45

Switch to the installation:

    nvm use 0.10.45

Install `grunt` globally:

    npm install -g grunt-cli

Building
--------
Fetch the source code (if you have added a [SSH key to github](https://help.github.com/articles/generating-ssh-keys)):

    git clone git@github.com:AntoineThebaud/swlcalc.git

Alternatively:

    git clone https://github.com/AntoineThebaud/swlcalc.git

Install swlcalc dependencies, defined in `package.json`:

    npm install

Build swlcalc by running:

    grunt

Run tests:
    grunt test

Tests can be found in the `test` folder. Open the html file to run tests in the browser. Open the js file to view the test logic.

When developing, use:
    
    grunt watch

The previous command monitors changes to files in the `src` folder. If any changes are detected, the build task is run.

Open `build/index.html` to view.

Distribution
------------
To create a distribution in the `dist` folder: 

    grunt dist

Open `dist/index.html` to view.

To create a zip-archive distribution:

    grunt package

Contributing
------------
Pull requests are welcome! They should be done against the `develop` branch.

There are many things to do. Some suggestions can be found in [issues](https://github.com/AntoineThebaud/swlcalc/issues). Otherwise, things like refactoring, decoupling and better tests to make swlcalc easier to maintain is also welcome.

Contributions can also be bug reports, feature requests and other feedback.

License
-------
MIT License for the source code. Please see the LICENSE file.

All art assets included in `public/assets/images/icons/` folder are taken from [The Secret World™ Chronicle](http://chronicle.thesecretworld.com/) [TO UPDATE : dead link]. The artwork should be considered property of Funcom GmBH unless otherwise noted. A small sample of signet, glyph and item icons are redistributed under fair use.
