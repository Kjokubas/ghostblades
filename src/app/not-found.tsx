import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-ghost-black px-4">
      <span className="font-japanese pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[16rem] leading-none text-white/[0.02]">
        四〇四
      </span>
      <p className="font-japanese text-accent-crimson mb-4 text-sm tracking-widest uppercase">
        404
      </p>
      <h1 className="font-heading text-ghost-white mb-6 text-5xl font-bold">
        Page Not Found
      </h1>
      <p className="text-ghost-silver mb-10 max-w-md text-center">
        The path you seek does not exist. Return to the forge.
      </p>
      <Link
        href="/"
        className="bg-accent-red-light text-white hover:bg-accent-crimson px-8 py-3 text-sm font-semibold tracking-wide uppercase transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
