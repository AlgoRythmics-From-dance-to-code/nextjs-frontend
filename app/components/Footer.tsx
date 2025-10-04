export default function Footer() {
  return (
    <footer
      className="site-footer border-t"
      style={{ borderTopColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto text-center py-8 text-[color:var(--muted)]">
        <small>
          © {new Date().getFullYear()} AlgoRythmics. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
