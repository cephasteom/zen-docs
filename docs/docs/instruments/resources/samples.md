---
sidebar_position: 11
---
# Samples
## Default Samples
The following sample packs are available for use with the [sampler](/docs/docs/instruments/sampler) instrument:
* bd
* bd808
* breaks
* cb808
* clap
* clap808
* clav808
* conga808
* cpu2
* cy808
* hh
* hh2
* hhc808
* hho808
* long
* ma808
* rs808
* sd
* sd808
* toms808

## Custom Samples
To load your own samples you need an additional tool. Clone [this repo](https://github.com/cephasteom/ct-samples) and follow the set up guide. Drag your samples into the samples directory then spin up the server. Refresh Zen and you should be good to go.

All samples are cached so that they don't have to load each time. Adding new samples will add to the cache without removing the old ones. Over time, this could lead to a bloated local cache. To clear the cache and start afresh, open up the developer tools (cmd-option-i on Chrome) > Application > Cache Storage, and delete. 