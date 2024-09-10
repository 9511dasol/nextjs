import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css"
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movie",
    default: "Next Movies",
  },
  description: "The best Movies on the best framework",
}; // 레이아웃에서 굳이 보여줄 필요 없다.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}


// Metadata nextjs 공식 사이트 들어가서 Metadata을 확인해보자
// 페이지 또는 레이아웃만 메타 데이터를 export 할 수 있다.
