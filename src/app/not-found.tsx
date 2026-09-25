import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="headline mt-4 text-6xl font-bold md:text-8xl">Page not found</h1>
      <p className="mt-5 max-w-md text-muted">
        That URL doesn’t exist. Head home or browse the work.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Go home</Button>
        <Button href="/projects" variant="ghost">
          Projects
        </Button>
      </div>
    </section>
  );
}
