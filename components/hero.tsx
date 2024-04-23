import "./hero.css"
import Image from 'next/image'


export function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-80">
          <Image
            src="/logo_nexus.png"
            width={500}
            height={500}
            alt="Nexus Marketing Logo"
            id="logo"
          />
          {/*<img className="w-full" id="logo" style={{ width: "100%" }} src="https://firebasestorage.googleapis.com/v0/b/nexus-marketing-ia.appspot.com/o/logo_nexus.svg?alt=media&token=fefdedbf-78ab-48b1-b05d-6a80f465996e" alt="Nexus Marketing Logo" />*/}
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start max-w-1/2">
        <p className="text-lg">chatbot IA</p>
        <h2 className="text-3xl font-bold">Nexus Marketing</h2>
        <Image className="h-12 w-auto mt-4 mb-8" src="/input_search.svg" alt="Input Icon" width={100} height={100} />
        <div className="flex" style={{ flexWrap: "wrap" }}>
          <span className="my-2 font-bold mr-4" style={{ color: "#0f0f0f", backgroundColor: "#E2FF69", borderRadius: "30px", padding: "1vh 2vw" }}>Plan de Marketing</span>
          <span className="my-2 font-bold mr-6" style={{ color: "#0f0f0f", backgroundColor: "#E2FF69", borderRadius: "30px", padding: "1vh 2vw" }}>Análisis  de competencia</span>
          <span className="my-2 font-bold" style={{ color: "#0f0f0f", backgroundColor: "#E2FF69", borderRadius: "30px", padding: "1vh 2vw" }}>SEO</span>
          <span className="my-2 font-bold" style={{ color: "#0f0f0f", backgroundColor: "#E2FF69", borderRadius: "30px", padding: "1vh 2vw" }}>Iniciar proyecto desde cero</span>
        </div>
      </div>
    </div>
  );
}


