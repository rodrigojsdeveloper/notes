'use client'

import * as Dialog from '@radix-ui/react-dialog'

interface NoteCardProps {
  note: {
    date: Date
    content: string
  }
}

export const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative flex flex-col gap-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <h2 className="text-sm font-medium text-slate-300">
          {note.date.toISOString()}
        </h2>

        <p className="text-sm leading-6 text-slate-400">{note.content}</p>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 flex h-[60vh] w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-slate-700">
          <div className="flex flex-1 flex-col gap-3 p-5">
            <h2 className="text-sm font-medium text-slate-300">
              {note.date.toISOString()}
            </h2>

            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
