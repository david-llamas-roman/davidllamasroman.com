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
import './icons/tiling-window-manager/wos/wos-icon.js' // wos
import './icons/tiling-window-manager/apps/full-screen-icon.js' // full screen
import './icons/tiling-window-manager/apps/close-app-icon.js' // close app
import './icons/tiling-window-manager/apps/browser/arrows-icon.js' // arrows
import './icons/tiling-window-manager/apps/browser/url-info-icon.js' // url info
import './icons/tiling-window-manager/apps/browser/bookmarks-icon.js' // bookmarks
import './icons/tiling-window-manager/apps/browser/close-tab-icon.js' // close tab
import './icons/tiling-window-manager/apps/browser/new-tab-icon.js' // new tab
import './icons/tiling-window-manager/apps/browser/creatidevpedia-icon.js' // CreatiDevPedia
import './icons/tiling-window-manager/apps/browser/dlrdevacademy-icon.js' // DlrDevAcademy
import './icons/tiling-window-manager/apps/browser/addition-icon.js' // addition

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
import './tiling-window-manager/apps/code-editor/code-editor.js' // visual studio code

// terminal emulator components
import './tiling-window-manager/apps/terminal-emulator/content/terminal-emulator-content.js' // content

// web browser components
import './tiling-window-manager/apps/web-browser/content/web-browser-content.js' // content
import './tiling-window-manager/apps/web-browser/content/new-tab.js' // new tab
import './tiling-window-manager/apps/web-browser/content/creatidevpedia-web.js' // CreatiDevPedia
import './tiling-window-manager/apps/web-browser/content/dlrdevacademy-web.js' // DlrDevAcademy

// code editor components
import './tiling-window-manager/apps/code-editor/content/code-editor-content.js' // content

// wos menu
import './wos-menu/wos-menu.js'

// footer
import './footers/main-footer.js'
import './footers/wos-taskbar/wos-taskbar.js'
