// Removed unsupported Geist font imports from next/font/google
// and replaced with standard antialiased class

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      {children}
    </div>
  );
}