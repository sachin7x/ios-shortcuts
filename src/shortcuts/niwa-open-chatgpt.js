#!/usr/bin/env node

/**
 * Niwa — ChatGPT Launch
 *
 * Opens the ChatGPT app. The Open App action cannot force ChatGPT into its
 * pink voice interface unless the installed ChatGPT app exposes that route.
 */

const { writeShortcutToFile } = require('../utils');
const { buildShortcut } = require('@joshfarrant/shortcuts-js');
const { openApp } = require('@joshfarrant/shortcuts-js/actions');

const SHORTCUT_NAME = 'Niwa - Open ChatGPT';

const actions = [
  openApp({
    app: 'ChatGPT',
  }),
];

const shortcut = buildShortcut(actions);
writeShortcutToFile(shortcut, SHORTCUT_NAME);
