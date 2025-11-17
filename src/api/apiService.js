// src/api/apiService.js

import { apiClient, supabase } from "./apiClient";

export const ApiService = {
  // === AUTHENTICATION ===
  /**
   * Login user menggunakan email dan password.
   */
  login: (email, password) => {
    return supabase.auth.signInWithPassword({ email, password });
  },

  /**
   * Logout user.
   */
  logout: () => {
    return supabase.auth.signOut();
  },

  /**
   * Mengambil data user yang sedang login dari backend KITA.
   */
  getMe: () => {
    return apiClient.get("/auth/me"); // Memanggil GET /api/v1/auth/me
  },

  /**
   * Mengundang partner baru (hanya Superadmin).
   */
  invitePartner: (email) => {
    return apiClient.post("/auth/invite", { email }); // POST /api/v1/auth/invite
  },

  // === DASHBOARD ===
  /**
   * Mengambil data summary dashboard.
   */
  getDashboard: () => {
    return apiClient.get("/dashboard"); // GET /api/v1/dashboard
  },

  // === PRODUCTS ===
  /**
   * Mengambil semua daftar produk.
   */
  getProducts: () => {
    return apiClient.get("/products"); // GET /api/v1/products
  },

  /**
   * Membuat produk baru.
   * @param {object} productData - Data produk lengkap
   */
  createProduct: (productData) => {
    return apiClient.post("/products", productData); // POST /api/v1/products
  },

  /**
   * Menghapus produk.
   * @param {number} id - ID Produk
   */
  deleteProduct: (id) => {
    return apiClient.delete(`/products/${id}`); // DELETE /api/v1/products/:id
  },

  // ... (tambahkan updateProduct, getProductById, dll.)

  // === SALES & SETTINGS ===
  /**
   * Mencatat penjualan baru.
   * @param {object} saleData - { product_id, quantity_sold, sale_price }
   */
  createSale: (saleData) => {
    return apiClient.post("/sales", saleData); // POST /api/v1/sales
  },

  /**
   * Mengambil pengaturan bagi hasil.
   */
  getSettings: () => {
    return apiClient.get("/settings"); // GET /api/v1/settings
  },

  /**
   * Update pengaturan bagi hasil.
   * @param {object} settingsData - { share_percent_superadmin, share_percent_partner }
   */
  updateSettings: (settingsData) => {
    return apiClient.put("/settings", settingsData); // PUT /api/v1/settings
  },
};
