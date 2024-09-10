export default function SalesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        {children}
        &copy; good is good
      </div>
    );
  }
  