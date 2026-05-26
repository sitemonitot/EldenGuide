// ══════════════════════════════════════════
// CONFIGURACIÓN DE SUPABASE
// ══════════════════════════════════════════
// INSTRUCCIONES:
// 1. Ve a https://supabase.com y crea una cuenta gratuita
// 2. Crea un nuevo proyecto
// 3. Ve a Project Settings > API
// 4. Copia tu Project URL y anon key y pégalos abajo
//
// IMPORTANTE: La anon key es pública por diseño en Supabase.
// La seguridad se garantiza mediante Row Level Security (RLS).
// ══════════════════════════════════════════

const SUPABASE_CONFIG = {
  url: "TU_PROJECT_URL_AQUI",    // Formato: https://xxxxxxxxxxx.supabase.co
  anonKey: "TU_ANON_KEY_AQUI"   // JWT largo: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
};

// Detectar si la configuración está lista
const SUPABASE_CONFIGURADO = (
  SUPABASE_CONFIG.url !== "TU_PROJECT_URL_AQUI" &&
  SUPABASE_CONFIG.anonKey !== "TU_ANON_KEY_AQUI"
);
