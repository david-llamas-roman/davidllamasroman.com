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

import si from 'systeminformation'

const SystemService = {
  async getSystemStats() {
    const [mem, cpu, net, load, battery] = await Promise.all([
      si.mem(),
      si.cpu(),
      si.wifiNetworks().catch(() => []),
      si.currentLoad(),
      si.battery().catch(() => ({ percent: 0 })),
    ])

    return {
      ram: {
        total: mem.total,
        used: mem.used,
        free: mem.free,
        usage: (mem.usage / mem.total) * 100,
      },
      cpu: {
        manuFacturer: cpu.manufacturer,
        brand: cpu.brand,
        speed: cpu.speed,
        cores: cpu.cores,
        usage: load.currentLoad.toFixed(2),
      },
      wifi: net.map((wifi) => ({
        signalLevel: wifi.signalLevel,
        quality: wifi.quality,
        channel: wifi.channel,
      })),
      battery: {
        percent: battery.percent,
        isCharging: battery.isCharging,
        hasBattery: battery.hasBattery,
      },
    }
  },
}

export default SystemService
