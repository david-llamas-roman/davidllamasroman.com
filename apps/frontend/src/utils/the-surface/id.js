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

function initId() {
  idPerspective()
}

// card perspective
function idPerspective() {
  const id = document.querySelector('#home .home__header .id__container .id')

  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0

  function ease(t) {
    return t * t * (3 - 2 * t)
  }

  function easeEdge(t) {
    const edgeThreshold = 0.9
    if (t > edgeThreshold) {
      return (
        edgeThreshold +
        ((1 - edgeThreshold) *
          (1 -
            Math.cos(((t - edgeThreshold) / (1 - edgeThreshold)) * Math.PI))) /
          2
      )
    }
    return t
  }

  id.addEventListener('mousemove', (event) => {
    const rect = id.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    let normX = Math.min(Math.max((x - centerX) / centerX, -1), 1)
    let normY = Math.min(Math.max((y - centerY) / centerY, -1), 1)

    normX = Math.sign(normX) * easeEdge(ease(Math.abs(normX)))
    normY = Math.sign(normY) * easeEdge(ease(Math.abs(normY)))

    targetX = targetX * 0.9 + normY * 10 * 0.1
    targetY = targetY * 0.9 + normX * 10 * 0.1
  })

  function animate() {
    currentX += (targetX - currentX) * 0.75
    currentY += (targetY - currentY) * 0.75

    id.style.transform = `rotateX(${-currentX}deg) rotateY(${currentY}deg)`

    const borderX = currentY * 2
    const borderY = currentX * 2
    id.style.setProperty('--angle-x', `${borderX}deg`)
    id.style.setProperty('--angle-y', `${borderY}deg`)

    requestAnimationFrame(animate)
  }
  animate()

  id.addEventListener('mouseleave', () => {
    targetX = 0
    targetY = 0
  })
}

export { initId }
