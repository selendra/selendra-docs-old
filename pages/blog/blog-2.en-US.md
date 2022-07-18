---
title: 'Selendra DAapps Ecosystem'
description: 'Almost 2 years ago we open sourced SWR, the tiny data-fetching React library that people love. Today we are reaching another milestone: the 1.0 version of SWR.'
date: August 27th, 2021
---

import Callout from 'nextra-theme-docs/callout'
import Bleed from 'nextra-theme-docs/bleed'

import Authors, { Author } from 'components/authors'

# Selendra DApps

<Authors date="August 27th, 2021">
  <Author name="Rithy Thul" link="https://github.com/rithythul" />
  <Author name="Nath Lay" link="https://github.com/selendra" />
</Authors>

Almost 2 years ago we [open sourced](https://twitter.com/vercel/status/1188911002626097157) SWR, the tiny data-fetching React library that people love. Today we are reaching another milestone: the 1.0 version of SWR!

## What’s New

### Smaller Size

[Performance](/docs/advanced/performance) is one of the most important features of SWR. In 1.0, we made the library significantly smaller **without removing any existing features**:

- 41% smaller core (24% smaller when gzipped, **3.9 kB**)
- 52% smaller package install size
- Improved tree-shaking

