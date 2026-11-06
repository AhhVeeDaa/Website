'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type ArtworkLightboxProps = {
  src: string
  alt: string
  title: string
}

export default function ArtworkLightbox({ src, alt, title }: ArtworkLightboxProps) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
      closeRef.current?.focus()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Preview ${title}`}
        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-colors hover:border-violet-300/50 hover:bg-violet-300/10 hover:text-white"
      >
        Preview
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby="artwork-preview-title"
        aria-modal="true"
        onClose={() => setOpen(false)}
        onCancel={(event) => {
          event.preventDefault()
          setOpen(false)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false)
        }}
        className="m-auto max-h-[92dvh] max-w-[min(96vw,72rem)] overflow-visible rounded-2xl border border-white/15 bg-[#090a0f] p-3 text-white shadow-2xl backdrop:bg-black/85"
      >
        <div className="flex items-center justify-between gap-4 px-2 pb-3">
          <h2 id="artwork-preview-title" className="text-sm font-medium">{title}</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close artwork preview"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="relative h-[min(78dvh,52rem)] w-[min(90vw,68rem)]">
          <Image src={src} alt={alt} fill sizes="96vw" className="rounded-lg object-contain" />
        </div>
      </dialog>
    </>
  )
}
