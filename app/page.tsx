import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          A GUI toolkit<br className="hidden sm:inline" />
          for various operations on media.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          様々なメディアに対する操作を、一元的に行うためのGUIツールキットです。
        </p>
      </div>
    </section>
  )
}
