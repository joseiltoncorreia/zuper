/// <reference types="cypress" />

describe('Testando a home page da Zuper', () => {
    it('Consulta de passagem area caminho feliz', () => {
        /*
        Dado que o usuário está na página inicial do Zupper
        Quando o usuário insere uma cidade no campo "Origem"
        E o usuário insere outra cidade no campo "Destino"
        E o usuário seleciona uma data de ida
        E o usuário seleciona uma data de volta
        E o usuário seleciona a quantidade de passageiros
        E o usuário clica no botão "Buscar"
        Então o sistema exibe a página de resultados com opções de voos de da cidade de origem para cidade de destino nas datas escolhidas
        */
        cy.fixture('busca').then((busca) => {
            // Itera sobre cada conjunto de dados de busca
            busca.forEach((busca) => {
                // Cria uma nova sessão do navegador para cada iteração
                cy.session(busca.destino, () => {
                    cy.visit('https://www.zupper.com.br')

                    // Seleciona o aeroporto de origem
                    cy.origemDestino('Origem', busca.origem)
                    cy.nomeAeroporto(busca.ciglaOrigem)

                    // Seleciona o aeroporto de destino
                    cy.origemDestino('Destino', busca.destino)
                    cy.nomeAeroporto(busca.ciglaDestino)

                    // Seleciona a data de ida e de volta
                    cy.contains('span', ' Data de ida ').click()
                    cy.dataIdaVolta(busca.dataIda)
                    cy.dataIdaVolta(busca.dataVolta)

                    // Seleciona a quantidade de passageiros que irão viajar
                    cy.get('input[data-zt="passengersConfigTrigger"]').click()
                    cy.numeroDeAdultos(busca.qtdAdultos)
                    cy.numeroDeCriancas(busca.qtdCriancas)
                    cy.numeroDeBebes(busca.qtdBebes)

                    cy.screenshot('informações da viagem')

                    // Realiza a busca
                    cy.get('button[data-zt="flightSearchSubmit"]').click()

                    // Validações
                    cy.resultadoDaBusca("Origem", busca.resultadoOrigem)                                        // Valida a Origem do voo
                    cy.resultadoDaBusca("Destino", busca.resultadoDestino)                                      // Valida o Destino do voo
                    cy.resultadoDaBusca("Data", busca.resultadoData)                                            // Valida a data de ida e volta do voo
                    cy.resultadoDaBusca("Passageiros", busca.resultadoPassageiros)                              // Valida a quantidade de passageiros do voo
                    cy.get('h3[class="description"]').should('contain.text', 'Melhores tarifas encontradas')    // Valida o texto Melhores tarifas encontradas
                    cy.get('header.flight-info span', { timeout: 10000 })                                       // Seleciona todos os spans dentro do header
                        .filter(':has(> i.fas.fa-plane)')                                                       // Filtra os spans que têm o ícone como filho direto
                        .filter(':contains("Ida")')                                                             // Filtra os spans que contêm o texto "Ida"
                        .its('length')                                                                          // Obtém o número de elementos encontrados
                        .then((length) => {
                            cy.get('div.flight-qty > h6').should('contain.text', `${length} voos encontrados`)  // Valida a quantidade de voos encontrados
                    })

                    cy.screenshot('Página com resultado das buscas')
                })
            })
        })
    })
})