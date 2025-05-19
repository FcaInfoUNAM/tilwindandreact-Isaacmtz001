function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mi Sitio</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Inicio</a></li>
        <li><a href="#" className="hover:underline">Productos</a></li>
        <li><a href="#" className="hover:underline">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
