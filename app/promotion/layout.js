export async function generateMetadata() {
  return {
    title: "Ưu đãi dành cho bạn",
    description: "Ưu đãi của nhà Dứa dành riêng cho bạn",
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
