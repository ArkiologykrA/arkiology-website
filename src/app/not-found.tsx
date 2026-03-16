import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
