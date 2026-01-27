import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  console.log('env.MODE', mode)
  const env=loadEnv(mode,process.cwd(),"VITE_")
  return {
    plugins: [react()],
    server:{
      port:parseInt(env.VITE_PORT),
      host:env.VITE_HOST
    }
  };
});
