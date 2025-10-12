import { common } from './common';
import { education } from './education';
import { experience } from './experience';
import { projects } from './projects';
import { windows } from './windows';
// FIX: Corrected import path for Translations type to avoid resolving to an empty file.
import type { Translations } from '../pt/index';

export const en: Translations = {
  desktop_icons: common.desktop_icons,
  ui: common.ui,
  windows,
  projects,
  experience,
  education,
};
