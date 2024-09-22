export const divisaoMock = [
  {
    id: '41',
    nome: 'Construção de edifícios',
    grupos: [
      {
        id: '41.1',
        nome: 'Incorporação de empreendimentos imobiliários',
        classes: [
          {
            id: '41.10',
            nome: 'Incorporação de empreendimentos imobiliários',
            subclasses: [
              { id: '41.10-7-00', nome: 'Incorporação de empreendimentos imobiliários' },
            ]
          }
        ]
      },
      {
        id: '41.2',
        nome: 'Construção de edifícios',
        classes: [
          {
            id: '41.20',
            nome: 'Construção de edifícios',
            subclasses: [
              { id: '41.20-4-00', nome: 'Construção de edifícios' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: '42',
    nome: 'Obras de infraestrutura',
    grupos: [
      {
        id: '42.1',
        nome: 'Construção de rodovias, ferrovias, obras urbanas e obras de arte especiais',
        classes: [
          {
            id: '42.11',
            nome: 'Construção de rodovias e ferrovias',
            subclasses: [
              { id: '42.11-1-01', nome: 'Construção de rodovias e ferrovias' },
              { id: '42.11-1-02', nome: 'Pintura para sinalização em pistas rodoviárias e aeroportos' },
            ]
          },
          {
            id: '42.12',
            nome: 'Construção de obras-de-arte especiais',
            subclasses: [
              { id: '42.12-0-00', nome: 'Construção de obras-de-arte especiais' },
            ]
          }
        ]
      },
      {
        id: '42.2',
        nome: 'Obras de infraestrutura para energia elétrica, telecomunicações, água, esgoto e transporte por dutos',
        classes: [
          {
            id: '42.21',
            nome: 'Obras para geração e distribuição de energia elétrica e para telecomunicações',
            subclasses: [
              { id: '42.21-9-01', nome: 'Construção de barragens e represas para geração de energia elétrica' },
              { id: '42.21-9-02', nome: 'Construção de estações e redes de distribuição de energia elétrica' },
              { id: '42.21-9-03', nome: 'Construção de estações e redes de telecomunicações' },
            ]
          },
          {
            id: '42.22',
            nome: 'Construção de redes de abastecimento de água, coleta de esgoto e construções correlatas',
            subclasses: [
              { id: '42.22-7-01', nome: 'Construção de barragens e represas para abastecimento de água' },
              { id: '42.22-7-02', nome: 'Construção de redes de abastecimento de água e coleta de esgoto' },
            ]
          },
          {
            id: '42.23',
            nome: 'Construção de redes de transportes por dutos, exceto para água e esgoto',
            subclasses: [
              { id: '42.23-5-00', nome: 'Construção de redes de transportes por dutos, exceto para água e esgoto' },
            ]
          }
        ]
      }
    ]
  },
]