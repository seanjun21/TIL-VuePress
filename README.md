# Today I Learned

This is my development log. Inspired by [milooy](https://github.com/milooy/TIL).

## Formatting Rules

- Follow [GFM (Github Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown/) with extension `.md`
- Create a folder after technology/language. Do not create a folder at root.
- All file names must be in English.

## Run locally

Use [gollum](https://github.com/gollum/gollum), [pow](http://pow.cx/), and [anvil](http://anvilformac.com/)

### gollum Installation

```bash
[sudo] gem install gollum
```

### pow Installation | Uninstallation

```bash
curl get.pow.cx | sh

curl get.pow.cx/uninstall.sh | sh
```

### Usage

Setup as below and connect to [http://til.wiki.test/](http://til.wiki.test/)

```bash
cd ~/.pow
ln -s path/to/this_local_repo til.wiki
```

### Anvil Installation
GUI pow tool Anvil [http://anvilformac.com/](http://anvilformac.com/)
