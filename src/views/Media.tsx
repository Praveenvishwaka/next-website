'use client'

import { useEffect, useRef } from 'react'

export default function Media() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#1e293b'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#38bdf8'
    ctx.font = '16px system-ui'
    ctx.fillText('Canvas test area', 20, 40)
    ctx.strokeStyle = '#4ade80'
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20)
  }, [])

  return (
    <>
      <h1 className="page-title" data-testid="page-media">Media &amp; Graphics</h1>
      <p className="page-desc">Images, video, audio, canvas, SVG, and picture elements.</p>

      <section className="section">
        <h2>Images</h2>
        <div className="grid-2">
          <figure>
            <img
              src="https://picsum.photos/seed/testplayground/320/180"
              alt="Random test image from picsum"
              width={320}
              height={180}
              data-testid="img-standard"
              id="img-standard"
              loading="lazy"
            />
            <figcaption style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Standard img with alt</figcaption>
          </figure>
          <figure>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100'%3E%3Crect fill='%2338bdf8' width='200' height='100'/%3E%3Ctext x='20' y='55' fill='white'%3EInline SVG img%3C/text%3E%3C/svg%3E"
              alt="Inline data URI image"
              data-testid="img-data-uri"
            />
            <figcaption style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Data URI image</figcaption>
          </figure>
        </div>
        <img src="/nonexistent-image.png" alt="Broken image fallback test" data-testid="img-broken" width={120} height={80} style={{ marginTop: '1rem', background: '#334155' }} />
      </section>

      <section className="section">
        <h2>Picture (responsive)</h2>
        <picture data-testid="picture-element">
          <source media="(min-width: 600px)" srcSet="https://picsum.photos/seed/wide/400/150" />
          <img src="https://picsum.photos/seed/narrow/200/150" alt="Responsive picture" data-testid="picture-img" />
        </picture>
      </section>

      <section className="section">
        <h2>SVG</h2>
        <svg width="200" height="100" viewBox="0 0 200 100" data-testid="svg-inline" role="img" aria-label="Test SVG graphic">
          <rect x="10" y="10" width="180" height="80" fill="#334155" rx="8" />
          <circle cx="50" cy="50" r="20" fill="#38bdf8" data-testid="svg-circle" />
          <text x="80" y="55" fill="#f1f5f9" fontSize="14">SVG Text</text>
        </svg>
      </section>

      <section className="section">
        <h2>Canvas</h2>
        <canvas ref={canvasRef} width={300} height={100} data-testid="canvas-element" id="canvas-element" style={{ border: '1px solid var(--border)', borderRadius: '6px' }} />
      </section>

      <section className="section">
        <h2>Video</h2>
        <video controls width={400} data-testid="video-element" id="video-element" poster="https://picsum.photos/seed/video/400/225">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <track kind="captions" srcLang="en" label="English" default />
          Your browser does not support video.
        </video>
      </section>

      <section className="section">
        <h2>Audio</h2>
        <audio controls data-testid="audio-element" id="audio-element">
          <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
          Your browser does not support audio.
        </audio>
      </section>

      <section className="section">
        <h2>Figure &amp; Figcaption</h2>
        <figure data-testid="figure-block">
          <blockquote cite="https://example.com">
            <p data-testid="blockquote-text">Testing is an infinite process of comparing the invisible to the ambiguous.</p>
          </blockquote>
          <figcaption>— <cite>James Bach</cite></figcaption>
        </figure>
      </section>
    </>
  )
}
