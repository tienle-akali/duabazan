export async function generateMetadata() {
  return {
    title: "Phương thức thanh toán",
    description: "Dứa hỗ trợ thanh toán bằng hình thức chuyển khoản",
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
