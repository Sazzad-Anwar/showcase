import Link from "next/link"

import { BlogAppRoutes } from "@/config/routes"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage(): JSX.Element {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed web apps <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Developed by{" "}
          <Link href="mailTo:sazzadzihan@gmail.com">
            Mohammad Sazzad Bin Anwar
          </Link>
        </p>
      </div>
      <div className="xls:grid-cols-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Link
          href={BlogAppRoutes.HOME}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "flex h-full w-full flex-col overflow-hidden rounded-lg p-0 shadow-lg"
          )}
        >
          <span className="flex w-full items-center justify-start gap-1 border-b px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-red-500" />
          </span>
          <span className="mt-5 flex h-80 w-full flex-col items-center justify-start">
            <h1 className=" text-xl font-bold md:text-2xl">Blog Site</h1>
            <p className="mt-3 px-5 text-center text-sm text-muted-foreground md:text-sm">
              Full fledged blog application which is SEO friendly and fully
              customized with admin panel. Author can highlight his blog/post by
              making subscription.
            </p>
          </span>
        </Link>
      </div>
    </section>
  )
}
