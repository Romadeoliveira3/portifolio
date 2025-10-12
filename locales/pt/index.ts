import { common } from './common';
import { education } from './education';
import { experience } from './experience';
import { projects } from './projects';
import { windows } from './windows';

const ptData = {
    desktop_icons: common.desktop_icons,
    ui: common.ui,
    windows,
    projects,
    experience,
    education,
};

export const pt = ptData;
export type Translations = typeof pt;
