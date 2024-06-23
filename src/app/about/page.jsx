
export const metadata = {
    title: "Tech Build | Sobre Nosotros",
    description:
      "Conoce a Tech Build, tu aliado en tecnología de vanguardia. Descubre nuestra misión, visión y los valores que nos impulsan a ofrecerte productos tecnológicos de alta calidad y un servicio excepcional. Nuestra historia, equipo y compromiso con la innovación y la satisfacción del cliente nos destacan en el mercado.",
    
  };
export default function About() {
    return (
        <div className="bg-zinc-100 dark:bg-stone-900 text-stone-900 dark:text-zinc-100 min-h-screen mt-[120px] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
            <p className="text-lg leading-relaxed">
              Tech Build nació con la visión de revolucionar el acceso a la tecnología de vanguardia. Desde nuestros humildes comienzos, nos hemos dedicado a ofrecer productos tecnológicos de alta calidad, buscando siempre la innovación y la satisfacción del cliente.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
            <p className="text-lg leading-relaxed">
              Nuestra misión es proporcionar a nuestros clientes las herramientas tecnológicas más avanzadas para mejorar sus vidas y negocios. Creemos en el poder de la tecnología para transformar y simplificar el día a día.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
            <p className="text-lg leading-relaxed">
              Aspiramos a ser la tienda líder en productos tecnológicos, reconocida por nuestra excelencia en servicio al cliente, calidad de productos y compromiso con la innovación.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li><strong>Calidad:</strong> Solo ofrecemos productos que cumplen con los más altos estándares de calidad.</li>
              <li><strong>Innovación:</strong> Nos mantenemos a la vanguardia de las tendencias tecnológicas para ofrecerte lo último en tecnología.</li>
              <li><strong>Compromiso:</strong> Nos dedicamos a la satisfacción del cliente, ofreciendo un servicio excepcional y soluciones personalizadas.</li>
              <li><strong>Integridad:</strong> Operamos con transparencia y honestidad en todas nuestras interacciones.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nuestro Equipo</h2>
            <p className="text-lg leading-relaxed">
              El equipo de Tech Build está compuesto por profesionales apasionados por la tecnología y comprometidos con la excelencia. Desde nuestro personal de atención al cliente hasta nuestros expertos en productos, cada miembro de nuestro equipo trabaja para asegurarte una experiencia de compra única y satisfactoria.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nuestro Compromiso</h2>
            <p className="text-lg leading-relaxed">
              En Tech Build, nos comprometemos a ofrecerte no solo productos tecnológicos de alta calidad, sino también una experiencia de compra fácil, segura y agradable. Estamos aquí para ayudarte a encontrar las soluciones tecnológicas que necesitas para llevar tu vida y tu negocio al siguiente nivel.
            </p>
          </section>
        </div>
      </div>
    )
}