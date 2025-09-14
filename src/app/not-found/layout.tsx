export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
