import { AtSignIcon, BookAudioIcon, CheckCheckIcon } from 'lucide-react'

import { Card } from '@/components/application/card'

export function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center gap-10 bg-zinc-950">
      <Card.Root>
        <Card.Header>
          <Card.Title className="flex items-center gap-3">
            <Card.Icon icon={BookAudioIcon} className="size-6" /> Estamos quase
            lá!
          </Card.Title>
          <Card.Description>
            Para finalizar sua inscrição, informe seu nome de usuário para
            utilizarmos em seus contatos.
          </Card.Description>
        </Card.Header>

        <Card.Content>
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="h-12 w-full rounded-md bg-zinc-700 pl-11 pr-4 outline-none transition-all focus:ring-4 focus:ring-primary"
            />
            <Card.Icon
              icon={AtSignIcon}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
          </div>

          <Card.Footer>
            <Card.Action
              variant="outline"
              className="hover:bg-rose-500"
              title="Clique para cancelar essa ação"
            >
              Cancelar
            </Card.Action>

            <Card.Action title="Clique para confirmar sua inscrição">
              <Card.Icon icon={CheckCheckIcon} />
              Confirmar inscrição
            </Card.Action>
          </Card.Footer>
        </Card.Content>
      </Card.Root>
    </main>
  )
}
