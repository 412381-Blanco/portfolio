export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4 font-sans">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-2">Desarrolladora Full Stack Jr.</p>
          <p className="text-lg text-purple-600 italic">Creando soluciones elegantes con pasión por la tecnología</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Sobre mí */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 font-sans">Sobre mí</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              Soy una desarrolladora con formación en Java, C#, Angular, .NET y bases de datos SQL y NoSQL. Poseo un
              nivel de inglés B1 que me permite comprender documentación técnica y comunicarme en entornos
              profesionales. Me apasiona crear soluciones eficientes, aprender nuevas tecnologías y aplicar buenas
              prácticas de programación.
            </p>
          </div>
        </section>

        {/* Educación */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 font-sans">Educación</h2>
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-8 shadow-lg border border-purple-200">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
              <h3 className="text-xl font-semibold text-purple-800">Tecnicatura en Programación</h3>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Universidad Tecnológica Nacional (UTN) - Córdoba</strong>
            </p>
            <p className="text-purple-600 font-medium">2024 - 2025 (En curso)</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 font-sans">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Lenguajes */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Lenguajes</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Java
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  C#
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  HTML & CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  SQL
                </li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Frameworks & Librerías</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Spring Boot
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Spring Framework
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Angular
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  .NET Framework
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Entity Framework
                </li>
              </ul>
            </div>

            {/* Herramientas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Herramientas & Conceptos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  API REST
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Microservicios
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Testing (JUnit, Mockito)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  NoSQL (MongoDB, Redis)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Maven
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 font-sans">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Proyecto 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Sistema de Gestión de Biblioteca</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Aplicación desarrollada en C# con WinForms y SQL Server. Incluye gestión de libros, usuarios y préstamos
                con procedimientos almacenados.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">C#</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">SQL Server</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">WinForms</span>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Juego de Estrategia TEG</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Juego de estrategia que reforzó mis conocimientos en POO, algoritmos y gestión del flujo lógico de
                sistemas complejos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Java</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">POO</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Algoritmos</span>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Aplicación Web CRUD</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Aplicación full-stack con Java, Spring Boot, Angular y SQL. Incluye autenticación, API REST y consultas
                optimizadas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Spring Boot</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Angular</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">API REST</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 font-sans">Conectemos</h2>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
            <p className="text-lg mb-6">¿Te interesa colaborar o simplemente charlar sobre tecnología?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:tuemail@example.com"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                📧 Enviar Email
              </a>
              <a
                href="https://github.com/TU-USUARIO"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
              >
                🔗 Ver GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
