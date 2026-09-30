/**
 * legal-pt.ts — textos legais em português para o Real Online Ruler.
 *
 * Redação original e natural (não tradução palavra por palavra).
 * Deve manter exatamente a mesma estrutura de legal-en.ts.
 */
export const legalPt = {
  about: {
    title: 'Sobre Nós | Real Online Ruler',
    description:
      'O Real Online Ruler é uma régua gratuita na tela, em tamanho real, criada pelo criador independente Firoz Khan (FK Digital Media). Saiba o que a ferramenta faz e os princípios por trás dela.',
    h1: 'Sobre Nós',
    lede: 'Uma ferramenta de medição gratuita que transforma sua tela em uma régua em tamanho físico real — criada por um criador independente, para todos.',
    breadcrumb: 'Sobre Nós',
    photoAlt: 'Firoz Khan, criador independente por trás da FK Digital Media',
    makerName: 'Firoz Khan',
    makerOrg: 'FK Digital Media',
    whoTitle: 'Quem somos',
    whoBody: [
      'O Real Online Ruler foi criado por Firoz Khan, um criador independente que trabalha sob o nome FK Digital Media. Firoz desenvolve ferramentas web gratuitas e práticas que qualquer pessoa pode usar sem criar conta, sem baixar nada e sem pagar.',
      'A ideia do site é simples: na web, toda hora surge um momento em que você precisa de uma medição rápida e não tem uma régua física por perto. Este site resolve isso — uma régua que mora no seu navegador e mede em centímetros, milímetros, polegadas e pixels.',
    ],
    whatTitle: 'O que o site faz',
    whatBody: [
      'O coração do site é uma régua na tela em tamanho físico real. Como cada tela tem uma densidade de pixels diferente, o site inclui um fluxo de calibração — detecção automática, banco de dados de dispositivos, cálculo pela diagonal da tela e referência com cartão de crédito — para que a régua coincida com uma régua de verdade encostada na sua tela.',
      'Ao redor da régua você encontra recursos extras de precisão: medição por arraste com leitura de distância e ângulo, transferidor, lupa, régua flutuante giratória, registro de medições com exportação e grade de referência. Tudo roda localmente no seu navegador; nada do que você mede sai do seu dispositivo.',
    ],
    principlesTitle: 'Nossos princípios',
    principles: [
      {
        t: 'Grátis para todos',
        d: 'Todas as ferramentas do site são gratuitas, sem conta e sem download. Software útil não deveria ter uma porta na frente.',
      },
      {
        t: 'Seus dados são seus',
        d: 'As medições e os ajustes de calibração ficam guardados só no seu navegador. Não temos contas, nem analytics, nem scripts de rastreamento.',
      },
      {
        t: 'Honestidade sobre a precisão',
        d: 'Uma régua na tela só é tão precisa quanto sua calibração. Dizemos isso com clareza e damos a você as ferramentas para verificar por conta própria.',
      },
    ],
    connectTitle: 'Fale conosco',
    connectBody:
      'Dúvidas, sugestões ou um erro para reportar? A forma mais rápida de falar com o Firoz é pelos perfis públicos dele:',
  },
  privacy: {
    title: 'Política de Privacidade | Real Online Ruler',
    description:
      'Política de Privacidade do Real Online Ruler: quais dados o site coleta (nenhum), como os ajustes de calibração ficam salvos localmente no seu navegador e os seus direitos.',
    h1: 'Política de Privacidade',
    lede: 'Resumindo: não coletamos dados pessoais. O único script de terceiros no site é o Google Analytics, usado para estatísticas básicas de uso.',
    breadcrumb: 'Política de Privacidade',
    updated: 'Última atualização: 30 de setembro de 2026',
    intro: [
      'O Real Online Ruler é uma ferramenta gratuita que funciona inteiramente no seu navegador. Esta política explica, em linguagem clara, quais informações o site trata — e quais não trata.',
    ],
    sections: [
      {
        h: 'Informações que coletamos',
        body: [
          'Não temos contas, nem cadastro, nem formulários que transmitam dados, e nunca vemos, armazenamos ou transmitimos nada do que você mede — as medições ficam no seu navegador. Para entender como o site é usado, utilizamos o Google Analytics, que coleta dados agregados de uso (como páginas visitadas, localização aproximada e tipo de dispositivo). Esses dados são regidos pela política de privacidade do Google, não por esta.',
        ],
      },
      {
        h: 'Informações guardadas no seu dispositivo',
        body: [
          'Os seus ajustes de calibração (por exemplo, pixels por polegada e suas unidades preferidas) ficam salvos no armazenamento local do seu navegador para que a régua continue calibrada entre as visitas. Esses dados nunca saem do seu dispositivo — não são enviados para nós nem para terceiros. Limpar os dados do site no navegador os apaga.',
        ],
      },
      {
        h: 'Cookies',
        body: [
          'O Google Analytics define seus próprios cookies (como _ga) para distinguir visitas. Você pode bloqueá-los ou excluí-los nas configurações do navegador, ou usar o complemento de desativação do Google — a régua continua funcionando normalmente. Fora o Analytics, o site não define cookies de rastreamento; os únicos outros valores guardados são as preferências funcionais descritas acima, no armazenamento local em vez de cookies.',
        ],
      },
      {
        h: 'Serviços de terceiros',
        body: [
          'O site é hospedado na Cloudflare Pages, que pode processar dados técnicos padrão (como endereços IP) para entregar as páginas com segurança — isso é regido pela própria política de privacidade da Cloudflare. Fora a hospedagem e o Google Analytics (descrito acima), nenhum outro serviço de terceiros está embutido no site.',
        ],
      },
      {
        h: 'Crianças',
        body: [
          'O site é uma ferramenta de medição de uso geral, sem conteúdo restrito por idade e sem coleta de dados. Se você é pai, mãe ou responsável e tem alguma dúvida, fale conosco pela página de contato.',
        ],
      },
      {
        h: 'Alterações nesta política',
        body: [
          'Se esta política mudar algum dia, a versão atualizada será publicada nesta página com uma nova data de revisão. Como não coletamos dados de contato, não temos como avisar você diretamente — volte aqui se isso for importante para você.',
        ],
      },
      {
        h: 'Contato',
        body: [
          'Dúvidas sobre esta política? Veja a página de contato para saber como nos alcançar.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termos de Serviço | Real Online Ruler',
    description:
      'Termos de Serviço do Real Online Ruler: uso gratuito, expectativas de precisão na medição em tela e uso aceitável.',
    h1: 'Termos de Serviço',
    lede: 'As regras, em linguagem clara, para usar esta ferramenta gratuita.',
    breadcrumb: 'Termos de Serviço',
    updated: 'Última atualização: 30 de setembro de 2026',
    intro: [
      'Ao usar o Real Online Ruler (o “Site”), você concorda com estes termos. Se não concordar, por favor não use o Site.',
    ],
    sections: [
      {
        h: 'O serviço',
        body: [
          'O Site oferece uma régua gratuita na tela e ferramentas de medição relacionadas. O uso do Site é gratuito, não exige conta e é fornecido “no estado em que se encontra”.',
        ],
      },
      {
        h: 'Precisão',
        body: [
          'As medições na tela dependem da calibração da sua tela. O Site oferece ferramentas de calibração, mas não podemos garantir que as medições coincidam com uma régua física dentro de uma tolerância específica. Não confie no Site para medições em que um erro possa causar dano — decisões médicas, de engenharia, de segurança ou jurídicas. Para trabalhos críticos, confirme sempre com um instrumento físico de medição.',
        ],
      },
      {
        h: 'Uso aceitável',
        body: [
          'Você concorda em não usar o Site de forma indevida: não tente interrompê-lo, não faça raspagem agressiva e não apresente o Site ou seus resultados como um produto seu. O design, os textos e o código são obra da FK Digital Media.',
        ],
      },
      {
        h: 'Propriedade intelectual',
        body: [
          'O conteúdo original, o design e o código do Site pertencem à FK Digital Media. Você pode usar as ferramentas de medição livremente para tarefas pessoais e comerciais; não pode copiar o design nem os textos do Site para criar um serviço concorrente.',
        ],
      },
      {
        h: 'Sem garantias',
        body: [
          'O Site é fornecido sem garantias de nenhum tipo, expressas ou implícitas, incluindo precisão, confiabilidade ou adequação a um fim específico.',
        ],
      },
      {
        h: 'Limitação de responsabilidade',
        body: [
          'Na máxima medida permitida por lei, a FK Digital Media não se responsabiliza por qualquer perda ou dano decorrente do seu uso — ou da impossibilidade de usar — o Site, incluindo decisões tomadas com base em medições feitas na tela.',
        ],
      },
      {
        h: 'Alterações',
        body: [
          'Estes termos podem ser atualizados de tempos em tempos; continuar usando o Site após a publicação das alterações significa aceitar os novos termos.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contato | Real Online Ruler',
    description:
      'Fale com o Real Online Ruler: entre em contato com Firoz Khan (FK Digital Media) pelos perfis públicos dele para dúvidas, sugestões ou relatos de erros.',
    h1: 'Contato',
    lede: 'Dúvidas, sugestões ou um erro para reportar? Veja como nos alcançar.',
    breadcrumb: 'Contato',
    intro: [
      'O Real Online Ruler é um projeto de uma pessoa só. Não há central de atendimento — mas as mensagens enviadas pelos perfis abaixo são lidas de verdade. A forma mais rápida de receber uma resposta útil é dizer o que você estava medindo e qual navegador e dispositivo usa.',
    ],
    socialTitle: 'Fale com o Firoz',
    socialBody: 'Perfis públicos (resposta mais rápida):',
    emailTitle: 'Envie um e-mail',
    email: 'support@realonlineruler.online',
    noteTitle: 'Antes de escrever',
    noteBody:
      'Se a sua dúvida é sobre precisão, experimente primeiro a página de calibração: a maioria das dúvidas de precisão se resolve recalibrando com o zoom do navegador em 100%.',
  },
};
