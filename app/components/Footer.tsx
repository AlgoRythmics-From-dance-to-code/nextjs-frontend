export default function Footer() {
  return (
    <footer className="site-footer" style={{ padding: "2rem 0", borderTop: "1px solid var(--border)" }}>
      <div className="footer-inner">
        <small>© {new Date().getFullYear()} AlgoRythmics. All rights reserved.</small>
      </div>
    </footer>
  );
}
