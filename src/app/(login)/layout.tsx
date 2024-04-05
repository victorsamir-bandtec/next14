export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <div>
      <div className="w-56 bg-slate-300">{children}</div>
    </div>
  );
}
