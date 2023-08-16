import TopNavbar from './TopNavBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNavbar />
      <main>{children}</main>
    </div>
  );
}
