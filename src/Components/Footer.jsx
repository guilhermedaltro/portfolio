import './Footer.css';

export default function Footer() {
  return (
    <div className="BoxFooter">
      <div className="TextPort">
        <h2>CONTATO</h2>
        <h3>Email: gdaltrooli@gmail.com</h3>
        <h3>GitHub
        {/* Ícone do GitHub */}
        <a 
          href="https://github.com/guilhermedaltro" 
          className="bi bi-github icone" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        </a>
        </h3>
        <h1>Obrigado pela visita!</h1>
      </div>
    </div>
  );
}