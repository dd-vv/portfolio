import { ImageResponse } from 'next/og'
import { hero, siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} — ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#faf8f3',
          color: '#1a1917',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#6f6c66' }}>
          <span style={{ color: '#1a1917' }}>{siteConfig.name}</span>
          <span>{siteConfig.role}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 84, lineHeight: 1, letterSpacing: -4 }}>
          <span>{hero.titleLine1}</span>
          <span style={{ color: '#8a867f' }}>{hero.titleLine2}</span>
        </div>
      </div>
    ),
    size,
  )
}
