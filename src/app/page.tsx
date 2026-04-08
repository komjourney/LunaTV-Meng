import Link from "next/link";

export const metadata = {
  title: "041203.xyz | Personal Media Library",
  description: "Private personal media library for self-use only.",
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f6f7fb",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ fontSize: "32px", margin: "0 0 16px", color: "#111827" }}>
          041203.xyz
        </h1>

        <p style={{ lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
          本网站仅提供影视信息搜索服务，所有内容均来自第三方网站。本站不存储任何视频资源，不对任何内容的准确性、合法性、完整性负责。
        </p>

        <p style={{ lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
          This is a private personal media library for self-use only.
        </p>

        <ul
          style={{
            lineHeight: 1.8,
            color: "#4b5563",
            paddingLeft: "20px",
            marginTop: "16px",
          }}
        >
          <li>不提供支付、银行、邮箱登录或账号验证服务</li>
          <li>不收集银行卡、验证码或任何金融类敏感信息</li>
          <li>如浏览器误报风险，请联系站点所有者处理</li>
        </ul>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "24px",
          }}
        >
          <Link
            href="/library"
            style={{
              background: "#111827",
              color: "#fff",
              textDecoration: "none",
              padding: "10px 16px",
              borderRadius: "10px",
            }}
          >
            Open Media Library
          </Link>

          <a
            href="mailto:you@example.com"
            style={{
              border: "1px solid #d1d5db",
              color: "#111827",
              textDecoration: "none",
              padding: "10px 16px",
              borderRadius: "10px",
            }}
          >
            Contact Owner
          </a>
        </div>
      </div>
    </main>
  );
}
