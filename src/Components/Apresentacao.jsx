import './Apresentacao.css';

export default function Apresentacao() {
  return (
    <div className='BoxApresentation'>
      <div className="Foto">
        {/* Adicionando a imagem diretamente com a URL */}
        <img width={300} alt="Foto de Guilherme Daltro" src="https://dl.imgdrop.io/file/aed8b140-8472-4813-922b-7ce35ef93c9e/2024/12/05/WhatsApp-Image-2024-12-05-at-10.24.03391b1932f71f9711.jpeg" />
      </div>
      <div className="Apresentation">
        <h1>SOBRE MIM</h1>
        <p>
          Olá, Tudo bem? Me chamo Guilherme Daltro, tenho 24 anos e sou
          estudante de Análise e Desenvolvimento de Sistemas na instituição
          Uninassau. Tenho muito interesse em aprender e desenvolver minhas
          habilidades como programador!
        </p>
      </div>
    </div>
  );
}