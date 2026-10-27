#!/usr/bin/env node

/**
 * Niwa — ChatGPT Launch
 *
 * Opens the ChatGPT app using its URL scheme. This does not force ChatGPT
 * into its voice mode; iOS only exposes actions the installed app supports.
 */

const { writeShortcutToFile } = require('../utils');
const { buildShortcut } = require('@joshfarrant/shortcuts-js');
const { openURL } = require('@joshfarrant/shortcuts-js/actions');

const SHORTCUT_NAME = 'Niwa - Open ChatGPT';

const actions = [
  openURL({
    url: 'chatgpt://',
  }),
];

const shortcut = buildShortcut(actions);
writeShortcutToFile(shortcut, SHORTCUT_NAME);
