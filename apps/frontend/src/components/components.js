/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License only.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2025 David Llamas Román
 */

'use strict'

// icons
import './icons/tiling-window-manager/wos/twm-wos-icon.js' // tiling window manager wos icon
import './icons/wos/wos-icon.js' // wos
import './icons/browser/arrows-icon.js' // arrows
import './icons/browser/bookmarks-icon.js' // bookmarks
import './icons/browser/creatidevpedia-icon.js' // creatidevpedia
import './icons/browser/dlrdevacademy-icon.js' // DlrDevAcademy
import './icons/browser/addition-icon.js' // addition

// header
import './headers/main-header.js'
import './headers/desktop-header/desktop-header.js'
import './headers/mobile-header/mobile-header.js'

// desktop header components
import './status-bar/components/twm-workspaces/twm-workspaces.js' // workspaces

// status bar
import './status-bar/status-bar.js'
import './status-bar/desktop-status-bar/desktop-status-bar.js'

// status bar components
import './status-bar/components/ram-usage/ram-usage.js' // ram usage
import './status-bar/components/cpu-usage/cpu-usage.js' // cpu usage
import './status-bar/components/battery-bar/battery-bar.js' // battery bar

// main content
import './main-content.js'
import './tiling-window-manager/tilingWM.js' // desktop

// main content components
import './tiling-window-manager/apps/base-app.js' // base
import './tiling-window-manager/apps/terminal-emulator/terminal-emulator.js' // terminal emulator
import './tiling-window-manager/apps/web-browser/web-browser.js' // browser
import './tiling-window-manager/apps/vs-code/vs-code.js' // visual studio code

// terminal emulator components
import './tiling-window-manager/apps/terminal-emulator/content/terminal-emulator-content.js' // content

// web browser components
import './tiling-window-manager/apps/web-browser/content/web-browser-content.js' // content
import './tiling-window-manager/apps/web-browser/content/creatidevpedia-web.js' // creatidevpedia
import './tiling-window-manager/apps/web-browser/content/dlrdevacademy-web.js' // DlrDevAcademy

// wos menu
import './wos-menu/wos-menu.js'

// footer
import './footers/main-footer.js'
import './footers/wos-taskbar/wos-taskbar.js'
