export const metadata = {
  title: "About us",
}; // 레이아웃에서 굳이 보여줄 필요 없다.

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS is Great!
    </div>
  );
}
