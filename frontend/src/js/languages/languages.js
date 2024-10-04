/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2024 David Llamas Román
 */

'use strict'

// IMPORTS
import {
  aboutMeMediumTitle,
  aboutMeParagraphs,
  aboutMeRemarkablePhrase,
  academyMediumTitle,
  dataKeyAttribute,
  experienceMediumTitle,
  getAttributeValue,
  getInTouchButton,
  getInTouchLabels,
  getInTouchMediumTitle,
  hideElement,
  licensesMediumTitle,
  licensesSmallTitles,
  licensesParagraphs,
  loginCreateAccountButton,
  loginCreateAccountLabels,
  loginCreateAccountMediumTitle,
  mainCardMediumTitle,
  mainCardNavbarLinks,
  projectsWarning,
  responsiveMenuNavbarLinks,
  selectLanguage,
  selectLanguageButton,
  showElement,
} from '../domManagement/elements.js'
import {
  addEventToElement,
  changeEvent,
  clickEvent,
} from '../domManagement/events.js'

// CONSTANTS
const english = 'en'
const spanish = 'es'

// GETTERS
async function getEnglishTexts() {
  const englishJsonPath = '../locales/en.json'
  const res = await fetch(englishJsonPath)
  const data = await res.json()

  return data
}

async function getSpanishTexts() {
  const spanishJsonPath = '../locales/es.json'
  const res = await fetch(spanishJsonPath)
  const data = await res.json()

  return data
}

// SETTERS
function setLanguage() {
  addEventToElement(selectLanguage, changeEvent, () => {
    if (selectLanguage.value === english) {
      updateElementsLanguage(english)
      hideElement(selectLanguage)
      showElement(selectLanguageButton)
    }

    if (selectLanguage.value === spanish) {
      updateElementsLanguage(spanish)
      hideElement(selectLanguage)
      showElement(selectLanguageButton)
    }
  })
}

// ACTIONS
function updateLanguageChangeButtons() {
  addEventToElement(selectLanguageButton, clickEvent, () => {
    hideElement(selectLanguageButton), showElement(selectLanguage)
  })
}

function translateTo(textLanguage) {
  // responsive-menu navbar-links
  const responsiveMenu = textLanguage.navbarLinks.responsiveMenu

  for (let responsiveMenuNavbarLink of responsiveMenuNavbarLinks) {
    responsiveMenuNavbarLink.innerText =
      responsiveMenu[
        getAttributeValue(responsiveMenuNavbarLink, dataKeyAttribute)
      ]
  }

  // main-card medium-title
  mainCardMediumTitle.innerText = textLanguage.mediumTitles.mainCard

  // main-card navbar-links
  const mainCard = textLanguage.navbarLinks.mainCard

  for (let mainCardNavbarLink of mainCardNavbarLinks) {
    mainCardNavbarLink.innerText =
      mainCard[getAttributeValue(mainCardNavbarLink, dataKeyAttribute)]
  }

  // login-create-account medium-title
  loginCreateAccountMediumTitle.innerText =
    textLanguage.mediumTitles.loginCreateAccount

  // login-create-account labels
  const labelsLoginCreateAccount = textLanguage.labels.loginCreateAccount

  for (let label of loginCreateAccountLabels) {
    label.innerText =
      labelsLoginCreateAccount[getAttributeValue(label, dataKeyAttribute)]
  }

  // login-create-account button
  loginCreateAccountButton.innerText = textLanguage.buttons.loginCreateAccount

  // about-me medium-title
  aboutMeMediumTitle.innerText = textLanguage.mediumTitles.aboutMe

  // about-me remarkable-phrase
  aboutMeRemarkablePhrase.innerText = textLanguage.remarkablePhrases.aboutMe

  // about-me paragraphs
  const paragraphsAboutMe = textLanguage.paragraphs.aboutMe

  for (let paragraph of aboutMeParagraphs) {
    paragraph.innerText =
      paragraphsAboutMe[getAttributeValue(paragraph, dataKeyAttribute)]
  }

  // academy medium-title
  academyMediumTitle.innerText = textLanguage.mediumTitles.academy

  // projects medium-title
  experienceMediumTitle.innerText = textLanguage.mediumTitles.experience

  // projects warning
  projectsWarning.innerText = textLanguage.warnings.projects

  // experience medium-title
  experienceMediumTitle.innerText = textLanguage.mediumTitles.experience

  // experience warning
  projectsWarning.innerText = textLanguage.warnings.experience

  // get-in-touch medium-title
  getInTouchMediumTitle.innerText = textLanguage.mediumTitles.getInTouch

  // get-in-touch labels
  const labelsGetInTouch = textLanguage.labels.getInTouch

  for (let label of getInTouchLabels) {
    label.innerText =
      labelsGetInTouch[getAttributeValue(label, dataKeyAttribute)]
  }

  // get-in-touch button
  getInTouchButton.innerText = textLanguage.buttons.getInTouch

  // licenses medium-title
  licensesMediumTitle.innerText = textLanguage.mediumTitles.licenses

  // licenses small-titles
  const smallTitlesLicences = textLanguage.smallTitles.licenses

  for (let smallTitle of licensesSmallTitles) {
    smallTitle.innerText =
      smallTitlesLicences[getAttributeValue(smallTitle, dataKeyAttribute)]
  }

  // licenses paragraphs
  const paragraphsLicenses = textLanguage.paragraphs.licences

  for (let paragraph of licensesParagraphs) {
    paragraph.innerText =
      paragraphsLicenses[getAttributeValue(paragraph, dataKeyAttribute)]
  }
}

async function updateElementsLanguage(language) {
  const englishTexts = await getEnglishTexts()
  const spanishTexts = await getSpanishTexts()

  // ENGLISH
  if (language === english) {
    translateTo(englishTexts)
  }

  // SPANISH
  if (language === spanish) {
    translateTo(spanishTexts)
  }
}

export default function setAndUpdateLanguage() {
  updateLanguageChangeButtons()
  setLanguage()
}
