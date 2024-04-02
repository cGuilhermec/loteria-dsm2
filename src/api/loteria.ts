
export async function buscarDadosLoteria(): Promise<any> {
    
    try {
        
        const response = await fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados');

        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Erro ao buscar dados da loteria: ', error);
    };

};