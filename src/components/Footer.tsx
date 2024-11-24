const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-6 px-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <p>© 2024 Minha Empresa. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">
          <a href="/termos" className="hover:underline text-gray-400">
            Termos de Uso
          </a>{' '}
          |{' '}
          <a href="/privacidade" className="hover:underline text-gray-400">
            Política de Privacidade
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  