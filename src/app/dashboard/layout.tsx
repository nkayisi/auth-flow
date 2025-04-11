
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col flex-1 h-auto border-8 border-yellow-600">
      {children}
    </main>
  );
}
