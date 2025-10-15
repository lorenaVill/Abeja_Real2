import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Abeja Real" className="h-12 w-auto" />
          <span className="text-xl font-bold tracking-wide text-yellow-400">
            Abeja Real
          </span>
        </div>

        <select
          onChange={(e) =>
            e.target.value && (window.location.href = e.target.value)
          }
          className="bg-black text-yellow-400 border border-yellow-400 rounded-lg px-3 py-2 hover:bg-gray-800 transition"
        >
          <option value="">Iniciar sesión</option>
          <option value="/registrar-cliente">Registrar cliente</option>
          <option value="/registrar-producto">Registrar producto</option>
        </select>
      </nav>
    </header>
  );
}
