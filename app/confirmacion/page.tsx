import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ConfirmacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gtl-logo-2DbYJyWQW4BNMMFKIWM5KvhMw0BNex.png"
              alt="GTL Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xl font-bold text-gray-800">GTL</span>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gradient-to-r from-green-400 to-blue-500">
        <div className="container mx-auto px-4 py-16 md:py-24 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h1 className="text-3xl font-bold mb-4">¡Gracias por registrarte!</h1>
            <p className="text-sm font-semibold text-green-500 mb-4">Se te envió un correo de confirmación</p>
            <p className="mb-6">
              Te estaremos notificando el 5 de marzo que ya estará lista la plataforma y puedes disfrutar de tus 3 meses
              gratis de GTL.
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/">Volver a la página principal</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>2025 Guatemala Tennis League (GTL). Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

