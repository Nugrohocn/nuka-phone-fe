// src/App.jsx
import React, { useEffect } from "react";
import Index from "./routes"; // Router Anda
import { useDispatch, useSelector } from "react-redux";

// Impor "perintah" (action) dan API
import { authPending, authSuccess, authFailed } from "./store/authSlice";
import { supabase } from "./api/apiClient";
import { ApiService } from "./api/apiService";

function App() {
  const dispatch = useDispatch();
  // Kita ambil 'status' untuk menampilkan loading
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Fungsi untuk mengecek session
    const checkSession = async () => {
      dispatch(authPending()); // 1. Bilang Redux: "Mulai loading!"
      try {
        // Cek ke Supabase, apa ada session tersimpan?
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) throw sessionError;

        if (!session) {
          // Jika tidak ada session (user belum login)
          throw new Error("No active session");
        }

        // Jika ada session, token sudah siap di Interceptor kita.
        // Langsung panggil 'getMe' untuk dapat data user
        const { data: meData, error: meError } = await ApiService.getMe();
        if (meError) throw meError;

        // 2. Bilang Redux: "Sukses! Ini data user-nya."
        dispatch(authSuccess(meData.data));
      } catch (error) {
        console.log("Check session failed:", error.message);
        // 3. Bilang Redux: "Gagal, user belum login."
        dispatch(authFailed(null));
      }
    };

    // Jalankan fungsi cek session
    checkSession();
  }, [dispatch]); // Dijalankan sekali saat App dimuat

  // --- PENTING ---
  // Tampilkan layar loading global selagi kita mengecek token.
  // Ini mencegah "kedipan" (flicker) ke halaman login saat me-refresh.
  if (authStatus === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading App...
      </div>
    );
  }

  // Setelah selesai cek, baru tampilkan Router Anda
  return (
    <>
      <Index />
    </>
  );
}

export default App;
