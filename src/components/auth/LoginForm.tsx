"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await login({ email, password });
      console.log("Login successful, redirecting to /admin");
      router.push("/admin");
    } catch (err: any) {
      console.error("Login failed:", err);
      setError(err.message || "Đăng nhập thất bại. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1
        className="text-3xl font-bold mb-6 text-[var(--primary-green)] text-center"
        style={{ fontFamily: "var(--font-roboto-serif)" }}
      >
        Đăng nhập
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            className="block text-[var(--gray-text)] font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary-green)] text-gray-800 bg-[#fcfcfc]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label
            className="block text-[var(--gray-text)] font-medium mb-1"
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary-green)] text-gray-800 bg-[#fcfcfc]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            disabled={isLoading}
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[var(--primary-green)] text-white font-bold text-lg hover:bg-[var(--secondary-green)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-roboto)" }}
          disabled={isLoading}
        >
          {isLoading ? "Đang xử lý..." : "Đăng nhập"}
        </button>
      </form>
      <div className="mt-6 text-center text-[var(--gray-text)] text-sm">
        Chưa có tài khoản?{" "}
        <Link
          href="/register"
          className="text-[var(--primary-green)] font-medium hover:underline"
        >
          Đăng ký
        </Link>
      </div>
    </div>
  );
}
