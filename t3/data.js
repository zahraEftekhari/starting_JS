export const canvas = {
  id: 'root',
  x: 10,
  y: -12,
  nodes: [
    {
      id: 'sky',
      x: 468,
      y: -23,
      nodes: [
        {
          id: 'cloud-1',
          x: -40,
          y: +66,
        },
        {
          id: 'cloud-2',
          x: -0,
          y: +33,
        }
      ]
    },
    {
      id: 'mountain',
      x: -35,
      y: 130,
      nodes: [
        {
          id: "hill-1",
          x: -35,
          y: 130,
          nodes: [
            {
              id: "ice",
              x: 0,
              y: -20,
            }
          ]
        },
        {
          id: "hill-2",
          x: -35,
          y: 130,
        },
      ]
    },
    {
      id: 'city',
      x: 1,
      y: -11,
      nodes: [
        {
          id: "park",
          x: 92,
          y: -8,
          nodes: [
            {
              id: 'tree-1',
              x: 12,
              y: 4,
            },
            {
              id: 'ping-pong-table-1',
              x: 45,
              y: 29,
            },
            {
              id: 'football-field-1',
              x: 142,
              y: 268,
              nodes: [
                {
                  id: "gate-1",
                  x: 0,
                  y: 12
                },
                {
                  id: "gate-2",
                  x: 48,
                  y: 12
                }
              ]
            }
          ]
        },
        {
          id: "street",
          x: 321,
          y: 784,
          nodes: [
            {
              id: 'car-1',
              x: 1,
              y: 2,
              nodes: [
                {
                  id: 'driver',
                  x: 0, 
                  y: 5,
                },
                {
                  id: 'drivers-wife',
                  x: 2, 
                  y: 5,
                }
              ]
            },
            {
              id: 'car-2',
              x: 4,
              y: 67,
              nodes: [
                {
                  id: 'driver',
                  x: 6, 
                  y: 22,
                },
              ]
            },
            {
              id: 'tank-1',
              x: 35,
              y: 324,
              nodes: [
                {
                  id: 'shooter-1',
                  x: 2, 
                  y: -3,
                },
              ]
            },
          ]
        }
      ]
    },
  ]
}
