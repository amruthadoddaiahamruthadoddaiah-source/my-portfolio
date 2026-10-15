import Image from "next/image";
import { profile } from "@/data/portfolio";
import { Sparkle, Blob } from "@/components/Decor";
import Icon from "@/components/Icon";

export default function ProfilePortrait() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Blob className="absolute -top-10 -right-10 h-72 w-72 text-[color:var(--color-petal)]" />
      <Blob className="absolute -bottom-16 -left-10 h-64 w-64 rotate-180 text-[color:var(--color-berry)]" />
      <div className="relative isolate flex flex-col items-center gap-6">
        <div className="relative h-72 w-72 overflow-hidden rounded-[2.5rem] border border-[color:var(--color-blush)] bg-white shadow-soft sm:h-80 sm:w-80 lg:h-96 lg:w-96">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-blush)]/70 via-white/80 to-white" />
          {profile.photo.src ? (
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 288px"
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[color:var(--color-berry)] via-[color:var(--color-petal)] to-[color:var(--color-blush)] text-white shadow-lg sm:h-36 sm:w-36">
                <span className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                  {profile.initials}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 px-6 text-center">
                <p className="text-sm font-medium text-[color:var(--color-ink)]/90">
                  Portrait placeholder
                </p>
                <p className="text-xs text-[color:var(--color-mauve)]">
                  Add your photo in <code className="rounded bg-black/5 px-1 py-0.5">data/portfolio.ts</code>
                </p>
              </div>
            </div>
          )}
          <div className="absolute -top-6 right-6 animate-float-slow text-[color:var(--color-petal)]">
            <Sparkle size={28} />
          </div>
          <div className="absolute -bottom-4 left-6 animate-float text-[color:var(--color-berry)]">
            <Sparkle size={22} />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 px-2 sm:px-0">
          <span className="chip shadow-sm">
            <Icon name="globe" size={16} />
            Web Development Learning
          </span>
          <span className="chip shadow-sm">
            <Icon name="code" size={16} />
            Python &amp; C Foundations
          </span>
          <span className="chip shadow-sm">
            <Icon name="sprout" size={16} />
            Student Developer
          </span>
        </div>
      </div>
    </div>
  );
}
