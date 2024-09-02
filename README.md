# Zupper - Testes Automatizados de Busca de Voos

Este projeto contém testes automatizados de ponta a ponta para a funcionalidade de busca de voos da plataforma Zupper, utilizando o Cypress, um framework de automação de testes para aplicações web modernas.

## Pré-requisitos
[Node.js]: Certifique-se de ter o *Node.js* instalado. Você pode verificar a versão executando *node -v* no seu terminal.
[Cypress]: Instale o Cypress usando o comando *npm install -D cypress*.
[Navegadores]: O Cypress já inclui o Electron por padrão. Se você precisar testar em outros navegadores, como Chrome ou Firefox, instale-os separadamente.
[Conta_no_GitHub:]: Você precisará de uma conta no GitHub para utilizar o workflow do GitHub Actions.

## Estrutura do Projeto
[cypress/e2e] Contém os arquivos de teste do Cypress (por exemplo, *zupper.cy.js*).
[cypress/fixtures] Contém os arquivos de dados de teste (por exemplo, *busca.json*).
[.github/workflows/cypress.yml] Define a configuração do workflow do GitHub Actions.

## Dados de Teste
O arquivo busca.json contém um array de objetos, cada um representando um caso de teste com informações sobre a busca de voos:
[
  {
    "origem": "Curitiba",
    "ciglaOrigem": "CWB",
    "destino": "Salvador",
    "ciglaDestino": "SSA",
    "dataIda": "2024-10-01",
    "dataVolta": "2024-10-30",
    "resultadoOrigem": "Curitiba, Brasil - CWB",
    "resultadoDestino": "Salvador, Brasil - SSA",
    "resultadoData": "ter. 01 de out.  - qua. 30 de out.",
    "resultadoPassageiros": "2 adultos, 2 crianças"
  },
  // ... outros casos de teste
]

## Instalação
1. Clone este repositório:
    git clone <https://github.com/joseiltoncorreia/zuper.git>

2. Navegue até o diretório do projeto:
    cd [hometaskjs]

3. Instale as dependências:
    npm install

## Executando os Testes
[Localmente]: Execute *npx cypress open* no seu terminal. Isso abrirá o Cypress Test Runner, onde você pode selecionar e executar seus testes.

[GitHub_Actions]:  O workflow definido em *.github/workflows/cypress.yml* acionará a execução automática dos testes a cada push no repositório. O workflow configura o ambiente, instala as dependências e executa os testes no navegador Chrome.

## Caso de Teste
 - Caminho Feliz da Busca de Voos: Este caso de teste preenche o formulário de busca de voos com diferentes origens, destinos e datas, simulando as interações do usuário e validando os resultados exibidos na página de resultados.
 - Adicionando Mais Casos de Teste: Para adicionar mais cenários de teste, modifique o arquivo *busca.json* com novos conjuntos de dados de busca.

## Relatórios
[Mochawesome]: O Cypress gera relatórios detalhados em HTML usando o Mochawesome reporter, com informações sobre os testes executados, incluindo capturas de tela e gravação de vídeos. Esses relatórios são salvos na pasta cypress/reports/.
[GitHub_Actions]: O workflow publica os resultados dos testes e o relatório Mochawesome na interface do GitHub Actions, fornecendo um resumo das execuções de teste e destacando quaisquer falhas. Você pode acessar os relatórios na aba "Actions" do seu repositório, clicando no workflow executado e, em seguida, na seção "Artifacts".