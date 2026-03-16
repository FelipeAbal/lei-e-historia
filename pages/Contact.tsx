import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-ink font-bold mb-4">Contato</h1>
        <div className="h-px w-16 bg-wine mb-12"></div>

        <div className="prose prose-lg max-w-none font-serif text-ink/90 leading-relaxed space-y-6">
          <p>
            O projeto <strong>Lei e História</strong> foi idealizado e desenvolvido por <strong>Felipe Cittolin Abal</strong>.
          </p>

          <p>
            Para sugestões, correções ou colaborações, entre em contato:
          </p>

          <div className="bg-[#F5F2EA] rounded-lg p-8 my-8 not-prose">
            <div className="space-y-4">
              <div>
                <span className="font-sans text-xs tracking-widest uppercase text-gray-500 block mb-1">E-mail</span>
                <a
                  href="mailto:felipeabal@upf.br"
                  className="font-sans text-lg text-wine hover:text-wine/80 transition-colors"
                >
                  felipeabal@upf.br
                </a>
              </div>
              <div>
                <span className="font-sans text-xs tracking-widest uppercase text-gray-500 block mb-1">Currículo Lattes</span>
                <a
                  href="http://lattes.cnpq.br/2584975972936590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-lg text-wine hover:text-wine/80 transition-colors"
                >
                  lattes.cnpq.br/2584975972936590
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
