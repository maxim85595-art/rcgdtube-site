"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, Users, Info } from "lucide-react"

type Tab = "home" | "socials" | "info"

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("home")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold tracking-tight">РКГДTUBE</h1>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeTab === "home"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </button>
            <button
              onClick={() => setActiveTab("socials")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeTab === "socials"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Users className="h-4 w-4" />
              Socials
            </button>
            <button
              onClick={() => setActiveTab("info")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeTab === "info"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Info className="h-4 w-4" />
              Info
            </button>
          </nav>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === "home" && <HomeTab />}
          {activeTab === "socials" && <SocialsTab />}
          {activeTab === "info" && <InfoTab />}
        </div>
      </main>
    </div>
  )
}

function HomeTab() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Добро пожаловать на РКГДTUBE</h2>
        <Card className="p-8 transition-all duration-300 hover:shadow-lg">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              РКГДTUBE - это проект в социальной сети Telegram, который совмещает в себе десятки каналов других креаторов.
              Это уникальный канал, который помогает начинающим креаторам заполучить внимание и оценку.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              В нашем канале существует бот, который помогает скачивать видео из: Yotube, Tiktok
              А так в недавнем обновлении появилась скачка музыки из: Soundcloud, Spotify.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Исследуйте разделы сайта, чтобы узнать больше о моих социальных сетях и получить дополнительную информацию
              о проектах. Спасибо, что заглянули!
            </p>
          </div>
        </Card>
      </div>

      {/* Image Gallery */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Галерея</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src={`/creative-digital-content-.jpg?height=400&width=600&query=creative digital content ${i}`}
                  alt={`Gallery item ${i}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">Проект #{i}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function SocialsTab() {
  const socials = [
    { name: "Telegram", username: "@sssrrxx", color: "from-red-500 to-red-600" },
    { name: "Telegram", username: "@skkgmd", color: "from-blue-500 to-blue-600" },
    { name: "Telegram", username: "ркгдtube", color: "from-blue-600 to-blue-700" },
    { name: "Telegram", username: "@hashinoby", color: "from-indigo-500 to-indigo-600" },
    { name: "Telegram", username: "@rkgdtube", color: "from-gray-700 to-gray-900" },
  ]

  return (
    <div className="space-y-8">
      {/* Avatar Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-accent shadow-lg transition-all duration-300 hover:scale-110">
            <img src="/diverse-profile-avatars.png" alt="Profile Avatar" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-accent border-2 border-background" />
        </div>
        <h2 className="text-3xl font-bold">РКГДTUBE</h2>
        <p className="text-center text-muted-foreground max-w-md">Создатель контента и цифровой художник</p>
      </div>

      {/* Social Cards */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Мои социальные сети</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {socials.map((social, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={`h-2 bg-gradient-to-r ${social.color}`} />
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-semibold">{social.name}</h4>
                <p className="text-sm text-muted-foreground font-mono">{social.username}</p>
                <button className="w-full rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105">
                  Подписаться
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoTab() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Информация</h2>
        <Card className="p-8 transition-all duration-300 hover:shadow-lg">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section>
              <h3 className="text-2xl font-semibold mb-3">О проекте</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                РКГДTUBE — это уникальный проект, в котором есть собственный бот и сайт, в котором появятся крутые фишки.
                Проект стартовал 17 апреля 2025 года. Спасибо, что вы есть!
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Направления</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Видеопроизводство</strong> — создание качественного
                    видеоконтента для различных платформ
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Цифровое искусство</strong> — эксперименты с визуальными
                    эффектами и дизайном
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Образовательный контент</strong> — делюсь знаниями и опытом с
                    сообществом
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-3">Контакты</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Для сотрудничества и предложений свяжитесь со мной через любую из социальных сетей, указанных в разделе{" "}
                <strong>Socials</strong>. Всегда открыт к новым идеям и интересным проектам!
              </p>
            </section>

            <section className="rounded-lg bg-muted p-6">
              <p className="text-center text-sm text-muted-foreground italic">
                "Творчество — это способ оставить свой след в цифровом мире"
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
