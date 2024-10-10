const Footer = () => {
  return (
    <footer className="text-center p-4 bg-black text-white text-sm w-full">
      <h2 className="text-lg font-semibold mb-2">Integrantes</h2>
      <p>Enzo Soddano RM557937</p>
      <p>Enzo Dias RM558438</p>
      <p>Vinicius Prates RM559183</p>
      <div className="mt-4">
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
      </div>
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
