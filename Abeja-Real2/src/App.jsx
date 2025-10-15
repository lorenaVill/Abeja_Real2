function App() {
  return (
    <div className="App">
      {/* === NAVBAR === */}
      <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo (lado izquierdo) */}
          <div className="flex items-center space-x-3">
            {/* Aquí luego pondrás tu logo */}
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            <span className="text-lg font-semibold tracking-wide">Mi Sitio</span>
          </div>

          {/* Botón de inicio de sesión (lado derecho) */}
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
            <span>Iniciar sesión</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </nav>
      </header>

      {/* === CONTENIDO PRINCIPAL === */}
      <main className="pt-24 text-center">
        <h1 className="text-3xl font-bold mt-8">Bienvenido a mi página</h1>
        <p className="mt-4 text-gray-700">
          Aquí podrás agregar el contenido de tu sitio web.
        </p>
      </main>
    </div>
  );
}

export default App;
