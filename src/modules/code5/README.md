## Trecho 5

- - Utilizando o (Single Responsibility Principle) na estruturação dos components
- Separar o style em um objeto referenciando ele por id
- Agrupar estados relacionados: essas mudanças tornam o código mais limpo e podem melhorar a performance ao reduzir o número de estados e atualizações de estado separadas. Além disso, agrupar estados relacionados em um único objeto de estado pode facilitar a manipulação de dados relacionados e a passagem de dados entre componentes.
- Refatoração dos componentes
- nomeação das functions
- Verificação da utilização do método getTotalValue, se sim adicionando ele para ser um memo
- Utilização do Flatlist no lugar do map
- Utilização do useCallback
- Inicializar o state form com o a props e garantir a sincronização se ela vim mudar 
- Evitar o problema de múltiplas instancias de intervalos sendo criada a cada renderização.
- 