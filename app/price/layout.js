export async function generateMetadata() {
  return {
    title: "Bảng giá các sản phẩm hạt dinh dưỡng",
    description: "Bảng giá các sản phẩm hạt dinh dưỡng tại Dứa Bazan",
    openGraph: {
      images: [process.env.NEXT_PUBLIC_SITE_BANNER],
    },
  };
}

export default function Layout({ children }) {
  return (
    <div>
      {/* appbar */}
      <div>{children}</div>
      {/* bottom nav */}
    </div>
  );
}
