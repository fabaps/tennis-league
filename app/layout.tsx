import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guatemala Tennis League (GTL)",
  description: "Conecta, compite y disfruta del tenis como nunca antes",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gtl-logo-2DbYJyWQW4BNMMFKIWM5KvhMw0BNex.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

