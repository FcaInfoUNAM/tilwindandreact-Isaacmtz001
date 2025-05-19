function Card() {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-sm text-center">
      <h2 className="text-xl font-semibold mb-2">Tarjeta de Ejemplo</h2>
      <p className="text-gray-700 mb-4">Este es un componente de tarjeta creado con Tailwind CSS. Puedes reutilizarlo donde quieras.</p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        Más información
      </button>
    </div>
  );
}

export default Card;
