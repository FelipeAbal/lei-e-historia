import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-ink font-bold mb-4">Sobre</h1>
        <p className="font-sans text-sm tracking-widest uppercase text-wine mb-12">
          Investigando as formas de poder e regulação antes da modernidade jurídica.
        </p>

        <div className="prose prose-lg max-w-none font-serif text-ink/90 leading-relaxed space-y-6">
          <p>
            O Direito, tal como o compreendemos hoje — um sistema abstrato, estatal e pretensamente universal —, é um fenômeno histórico recente, consolidado apenas após as revoluções burguesas. Projetar essa estrutura moderna sobre o passado é um anacronismo que distorce a realidade das sociedades antigas.
          </p>
          <p>
            O projeto <strong>Lei e História</strong> nasce para oferecer acesso direto às fontes, sem os filtros idealistas que buscam enxergar o presente no passado.
          </p>

          <h2 className="font-display text-2xl text-ink font-bold mt-12 mb-4">Contra a Evolução Linear</h2>
          <p>
            Não buscamos traçar uma linha evolutiva do jurídico. Recusamos a ideia de que a história seja uma marcha contínua e progressiva em direção à liberdade ou à razão, onde os códigos antigos seriam apenas versões "rudimentares" ou "bárbaras" das nossas leis atuais.
          </p>
          <p>
            Ao contrário, entendemos a história como uma sucessão de rupturas.
          </p>
          <p>
            O que apresentamos aqui são sistemas normativos singulares, nascidos de necessidades materiais, religiosas e políticas específicas de seus tempos. São respostas concretas a problemas de suas épocas, sem qualquer compromisso com o que viria séculos depois.
          </p>

          <h2 className="font-display text-2xl text-ink font-bold mt-12 mb-4">O Arquivo</h2>
          <p>
            Este site atua como um repositório de fontes primárias para quem deseja estudar a materialidade da norma.
          </p>
          <p>
            Do controle econômico nos palácios do Oriente Próximo às estruturas de parentesco da Antiguidade Clássica, cada documento é apresentado em sua literalidade e contexto. Não buscamos aqui o espelho do nosso Direito, mas a compreensão crítica de como a norma serviu a diferentes formas de dominação, organização e violência ao longo da história humana.
          </p>

          <blockquote className="border-l-4 border-wine pl-6 italic text-ink/70 my-10">
            "O passado é um país estrangeiro; eles fazem as coisas de maneira diferente lá."
            <footer className="not-italic text-sm mt-2 text-gray-500">— L.P. Hartley</footer>
          </blockquote>
        </div>
      </article>
    </div>
  );
};

export default About;
