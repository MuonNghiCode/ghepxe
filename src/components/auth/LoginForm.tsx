"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff, Lock, Mail, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    } catch (err) {
      console.error("Login failed:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Đăng nhập thất bại. Vui lòng thử lại.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Logo Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <motion.div
          className="inline-block p-4 bg-white rounded-2xl shadow-lg mb-4"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] rounded-xl flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <LogIn className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div> */}
        <motion.h1
          className="text-4xl font-extrabold mb-2 text-gray-900"
          style={{ fontFamily: "var(--font-roboto-serif)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Chào mừng trở lại
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Đăng nhập vào hệ thống quản trị GhepXe
        </motion.p>
      </motion.div>

      {/* Login Card */}
      <motion.div
        className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <label
              className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)]" />
              <input
                id="email"
                type="email"
                placeholder="admin@ghepxe.com"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[var(--primary-green)] focus:ring-2 focus:ring-[var(--primary-green)]/20 text-gray-800 bg-gray-50 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                disabled={isLoading}
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <label
              className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)]" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[var(--primary-green)] focus:ring-2 focus:ring-[var(--primary-green)]/20 text-gray-800 bg-gray-50 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                disabled={isLoading}
              />
              <motion.button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--gray-text)] hover:text-[var(--primary-green)] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-roboto)" }}
            disabled={isLoading}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 169, 130, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            {isLoading ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                Đang xử lý...
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                Đăng nhập
              </>
            )}
          </motion.button>
        </form>

        {/* Footer Note */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <p className="text-[var(--gray-text)] text-sm">
            🔒 Chỉ dành cho quản trị viên
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
