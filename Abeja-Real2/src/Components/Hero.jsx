import miel from "../assets/miel.png";

export default function Hero() {
  return (
    <section className="bg-black text-white py-24 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-yellow-400">
            Miel 100% natural, directo del apicultor 🍯
          </h1>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg text-lg transition transform hover:scale-105">
            Ver catálogo
          </button>
        </div>

        <div className="relative">
          <img
            src={miel}
            alt="Miel natural con panal"
            className="rounded-lg w-full h-96 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
