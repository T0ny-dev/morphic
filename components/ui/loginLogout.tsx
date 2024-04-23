import { useUser } from "@auth0/nextjs-auth0/client";
import { useTheme } from 'next-themes';
import Link from 'next/link'

function LoginLogout() {
  const { theme } = useTheme();
  const { user } = useUser();

  // Determinar la URL de la imagen según el tema
  const lightImageSrc = '/vector_black.svg'; // Ruta relativa
  const darkImageSrc = '/vector.svg'; // Ruta relativa
  const imageSrc = theme === 'dark' ? darkImageSrc : lightImageSrc;

  return (
    <div className="flex justify-center mr-6 items-center">
      {!user && (
        <Link href="/api/auth/login">
          <button className="flex items-center text-lg">
            Iniciar sesión
            <img
              className="h-3 w-3 ml-2"
              src={imageSrc}
              alt="Icono de inicio de sesión"
            />
          </button>
        </Link>
      )}
      {user && (
        <a href="/api/auth/logout">
          <button>Cerrar sesión</button>
        </a>
      )}
    </div>
  );
}

export default LoginLogout;



