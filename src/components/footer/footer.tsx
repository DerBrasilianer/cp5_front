const Footer = () => {
  return (
    <footer className="text-center p-2 bg-black text-white text-sm w-full">
      Desenvolvido por
      <a
        href="https://github.com/vinimarcili"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:underline ml-1"
      >
        Vinícius Marcili
      </a>
      {' '}@ {new Date().getFullYear()}
      <div>
        E modificado por{' '}
        <a
          href="https://github.com/DerBrasilianer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Enzo Soddano
        </a>
      </div>
    </footer>
  )
}

export default Footer;
