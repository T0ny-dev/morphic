import { useUser } from "@auth0/nextjs-auth0/client";
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'

function LoginLogout() {
  const { theme } = useTheme();
  const { user } = useUser();

  // Determinar la URL de la imagen según el tema
  const lightImageSrc = '/vector.svg'; // Ruta relativa
  const darkImageSrc = '/vector.svg'; // Ruta relativa
  const imageSrc = theme === 'dark' ? darkImageSrc : lightImageSrc;

  return (
    <div className="flex justify-center mr-6 items-center">
      {!user && (
        <Link href="/api/auth/login">
          <button className="flex items-center text-lg">
            Iniciar sesión
            <Image src={imageSrc} alt="" width={15} height={15} style={{ marginLeft: "1vw" }} />
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



