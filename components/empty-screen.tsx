import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Desarrollar plan de marketing',
    message: 'Desarrollame un plan de marketing en español'
  },
  {
    heading: 'Realizar análisis de la competencia',
    message: 'Realiza análisis de la competencia en español'
  },
  {
    heading: 'Mejorar SEO de una página web',
    message: 'Mejorar SEO de una página web'
  },
  {
    heading: 'Crear proyecto desde cero',
    message: 'Crear proyecto nuevo con en modelo lean canvas, generar propuestas de nombres'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
