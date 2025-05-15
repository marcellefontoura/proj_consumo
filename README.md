# API de Monitoramento de Consumo de Energia

Esta API, desenvolvida com NestJS e MongoDB, permite:
- **Registrar** consumo mensal de energia (kWh) por usuário.
- **Consultar histórico** de consumos em intervalo de datas.
- **Gerar alertas** quando o consumo atual excede o do mês anterior.

## Alinhamento com ODS 7
Objetivo de Desenvolvimento Sustentável 7: “Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos”.  
Aplicação: ferramenta para comunidades monitorarem e gerenciarem seu uso de energia, promovendo conscientização e sustentabilidade.

## Como instalar e rodar
1. Clone este repositório:  
   ```bash
   git clone https://github.com/marcellefontoura/proj_consumo.git
   cd proj_consumo
   ```
2. Instale dependências:  
   ```bash
   npm install
   ```
3. (Opcional) Defina a variável de ambiente `PORT` ou use a porta padrão 3000.  
4. Inicie o servidor:  
   ```bash
   npm run start
   ```
5. Abra no navegador: `http://localhost:3000` para ver o “Hello World!” inicial.

## Testando com Postman
- **POST** `http://localhost:3000/consumo`  
  **Body** (raw → JSON):
  ```json
  {
    "usuarioId": "seuUsuario",
    "kwh": 120,
    "dataLeitura": "2025-05-14"
  }
  ```
- **GET**  
  ```
  http://localhost:3000/consumo/historico/seuUsuario?dataInicio=2025-01-01&dataFim=2025-12-31
  ```
- **GET**  
  ```
  http://localhost:3000/consumo/alerta/seuUsuario
  ```
