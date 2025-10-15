import { useState } from "react";

const products = [
  {
    image: "/src/assets/Miel-Multifloral.png", 
    name: "Miel Multifloral",
    desc: "Miel obtenida de distintas flores silvestres, con sabor equilibrado y aroma floral.",
    options: [
      "Frasco 250g - $8.000",
      "Frasco 500g - $15.000",
      "Frasco 1kg - $25.000",
    ],
  },
  {
    image: "/src/assets/Miel-Monofloral.png",
    name: "Miel Monofloral",
    desc: "Miel de una única flor, con sabor más definido y aroma intenso.",
    options: [
      "Frasco 250g - $9.000",
      "Frasco 500g - $18.000",
      "Frasco 1kg - $28.000",
    ],
  },
  {
    image: "/src/assets/Mielato-Roble.png",
    name: "Mielato de Roble",
    desc: "Miel de roble, con sabor robusto y notas terrosas.",
    options: [
      "Frasco 250g - $12.000",
      "Frasco 500g - $22.000",
      "Frasco 1kg - $35.000",
    ],
  },
    {
    image: "/src/assets/Mielato-Pino.png",
    name: "Mielato de Pino",
    desc: "Miel de pino, con sabor fresco y notas resinadas.",
    options: [
      "Frasco 250g - $12.000",
      "Frasco 500g - $22.000",
      "Frasco 1kg - $35.000",
    ],
  },
    {
    image: "/src/assets/Mielato-Eucalipto.png",
    name: "Mielato de Eucalipto",
    desc: "Miel de eucalipto, con sabor mentolado y notas frescas.",
    options: [
      "Frasco 250g - $12.000",
      "Frasco 500g - $22.000",
      "Frasco 1kg - $35.000",
    ],
  },
];

export default function Products() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-700">
          Nuestros productos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <FlipCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ image, name, price, desc, options }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-[380px] transition-transform duration-700 transform-style-preserve-3d ${
        flipped ? "rotate-y-180" : ""
      }`}
    >
      {/* Cara frontal */}
      <div className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden text-center backface-hidden">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-amber-700 mb-4">{name}</h3>
          <button
            onClick={() => setFlipped(true)}
            className="bg-black text-yellow-400 py-2 px-4 rounded-lg font-bold hover:bg-gray-800 transition"
          >
            Más información
          </button>
        </div>
      </div>

      {/* Cara trasera */}
      <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 text-center transform rotate-y-180 backface-hidden">
        <h3 className="text-2xl font-bold text-amber-700 mb-3">{name}</h3>
        <p className="text-gray-600 mb-3">{desc}</p>
        <p className="text-gray-800 font-semibold">Presentaciones:</p>
        <ul className="text-gray-600 mb-3">
          {options.map((opt, i) => (
            <li key={i}>• {opt}</li>
          ))}
        </ul>
        <p className="text-amber-600 font-bold text-xl mb-4">{price}</p>
        <button
          onClick={() => setFlipped(false)}
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition"
        >
          Volver
        </button>
      </div>
    </div>
  );
}
