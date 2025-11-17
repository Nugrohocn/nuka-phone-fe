import React, { useEffect } from "react";
import { Chrome } from "lucide-react";
import { useForm } from "react-hook-form";
import { ApiService } from "../../api/apiService";
import { useNavigate } from "react-router-dom";

// 1. Impor hook Redux dan "Perintah" (Actions)
import { useDispatch, useSelector } from "react-redux";
import { authPending, authSuccess, authFailed } from "../../store/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // 'errors' untuk validasi
  } = useForm();

  // 2. Siapkan hook Redux & Navigasi
  const dispatch = useDispatch(); // Untuk "mengirim perintah" ke Redux
  const navigate = useNavigate();

  // 3. Ambil state dari Redux
  const {
    status, // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: apiError, // Pesan error dari Redux (jika ada)
    isAuthenticated, // boolean (apakah sudah login)
  } = useSelector((state) => state.auth);

  // 4. Logika onSubmit yang sudah terhubung ke Redux
  const onSubmit = async (formData) => {
    // Perintah 1: "Mulai loading!"
    dispatch(authPending());

    try {
      // Panggil API Login
      const { data: loginData, error: loginError } = await ApiService.login(
        formData.email,
        formData.password,
      );

      if (loginError) {
        throw new Error(loginError.message); // Jika login gagal, lompat ke 'catch'
      }

      // Jika login sukses, panggil API 'getMe' untuk dapat data user
      const { data: meData, error: meError } = await ApiService.getMe();

      if (meError) {
        throw new Error(meError.message); // Jika getMe gagal, lompat ke 'catch'
      }

      // Perintah 2: "Login sukses! Ini data user-nya."
      dispatch(authSuccess(meData.data));
    } catch (error) {
      console.error(error);
      // Perintah 3: "Login Gagal!"
      dispatch(authFailed("Email atau password salah. Coba lagi."));
    }
  };

  // 5. Efek untuk Pindah Halaman setelah login sukses
  useEffect(() => {
    if (isAuthenticated) {
      reset(); // Kosongkan form setelah sukses
      navigate("/"); // Arahkan ke Dashboard (rute '/')
    }
  }, [isAuthenticated, navigate, reset]);

  // 6. Ini adalah JSX LENGKAP Anda, dengan tambahan:
  //    - Tampilan 'apiError'
  //    - Logika 'disabled' dan 'loading' pada tombol
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-md">
        <h1 className="mb-1 text-center text-3xl font-bold text-gray-900">
          Selamat Datang
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Silakan login untuk melanjutkan
        </p>

        {/* --- Tampilkan Error dari Redux di sini --- */}
        {apiError && (
          <div className="mb-4 rounded-lg bg-red-100 p-3 text-center text-sm text-red-700">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* --- Input Email Anda (Lengkap) --- */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format email tidak valid",
                },
              })}
              placeholder="Masukkan email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {/* Tampilkan error validasi email */}
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* --- Input Password Anda (Lengkap) --- */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password Wajib Diisi",
                minLength: {
                  value: 8,
                  message: "Password minimal 8 karakter",
                },
              })}
              type="password"
              placeholder="Masukkan password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {/* Tampilkan error validasi password */}
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* --- Tombol Login Anda (dengan state loading) --- */}
          <button
            type="submit"
            disabled={status === "loading"} // Tombol mati saat loading
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700 active:scale-[.98] disabled:opacity-50"
          >
            {status === "loading" ? "Loading..." : "Login"}
          </button>
        </form>

        {/* --- Sisa Kode Anda --- */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="px-3 text-sm text-gray-500">atau</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 transition-all hover:bg-gray-50 active:scale-[.98]">
          <Chrome size={22} strokeWidth={1.5} className="text-blue-600" />
          <span className="font-medium text-gray-700">Login dengan Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
