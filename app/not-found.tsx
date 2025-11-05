export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="mb-4 opacity-80">Page not found</p>
      <a href="/home" className="underline hover:opacity-70">
        Go home
      </a>
    </div>
  );
}
