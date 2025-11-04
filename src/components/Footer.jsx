export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Ember & Fin. All rights reserved.</p>
          <div className="text-sm text-slate-600">Follow us: @emberandfin</div>
        </div>
      </div>
    </footer>
  );
}
