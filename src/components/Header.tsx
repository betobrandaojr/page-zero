const Header = () => {
    return (
      <header className="bg-gray-100 text-center py-16 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Bem-vindo à Nossa Landing Page
        </h1>
        <p className="text-base md:text-lg mt-4 text-gray-600">
          Estamos criando algo incrível para você.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Saiba Mais
        </button>
      </header>
    );
  };
  
  export default Header;
  