import { useUser } from "@auth0/nextjs-auth0/client";
import { useTheme } from 'next-themes';
import Link from 'next/link'

function LoginLogout() {
  const { theme } = useTheme();
  const { user } = useUser();

  // Determinar la URL de la imagen según el tema


  return (
    <div className="flex justify-center mr-6 items-center">
      {!user && (
        <Link href="/api/auth/login">
          <button className="flex items-center text-lg">
            Iniciar sesión
          </button>
        </Link>
      )}
      {user && (
        <Link href="/api/auth/logout">
          <button>Cerrar sesión</button>
        </Link>
      )}
    </div>
  );
}

export default LoginLogout;



