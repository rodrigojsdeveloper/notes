'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void
}

export const NewNoteCard = ({ onNoteCreated }: NewNoteCardProps) => {
  const [shouldShowOnboarding, setShouldShowOnboarding] =
    useState<boolean>(true)
  const [content, setContent] = useState<string>('')

  const handleShouldShowOnboarding = () => {
    setShouldShowOnboarding(!shouldShowOnboarding)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onNoteCreated(content)
    setContent('')
    setShouldShowOnboarding(true)
    toast.success('Nota criada')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col gap-3 rounded-md bg-slate-700 p-5 text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <h2 className="text-sm font-medium text-slate-200">Adicionar nota</h2>

        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 flex h-[60vh] w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-slate-700">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h2 className="text-sm font-medium text-slate-200">
                Adicionar nota
              </h2>

              {shouldShowOnboarding ? (
                <p className="text-sm font-medium leading-6 text-slate-400">
                  Comece{' '}
                  <button className="text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{' '}
                  em áudio ou se preferir{' '}
                  <button
                    onClick={handleShouldShowOnboarding}
                    className="text-lime-400 hover:underline"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  onChange={(e) => {
                    setContent(e.target.value)
                    if (e.target.value === '') {
                      handleShouldShowOnboarding()
                    }
                  }}
                  className="flex-1 resize-none bg-transparent text-sm leading-6 text-slate-400"
                  required
                  value={content}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm font-medium text-lime-950 hover:bg-lime-500"
            >
              Salvar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
