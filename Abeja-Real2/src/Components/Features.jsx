export default function Features() {
  const items = [
    {
      icon: "✔️",
      title: "Sin aditivos",
      text: "100% miel pura sin conservantes ni azúcares añadidos",
    },
    {
      icon: "🚚",
      title: "Envíos rápidos",
      text: "Entrega rápida y segura a todo el país",
    },
    {
      icon: "🌸",
      title: "Variedad floral",
      text: "Diferentes variedades de miel de flores autóctonas",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {items.map((it, idx) => (
          <div key={idx} className="text-center">
            <div className="flex justify-center mb-4">
              <span
                className="w-16 h-16 flex items-center justify-center text-4xl rounded-full"
                aria-hidden="true"
              >
                <span className="text-amber-600">{it.icon}</span>
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2">{it.title}</h3>
            <p className="text-gray-600">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
