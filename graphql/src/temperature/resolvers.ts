const temperatures = [
  {
    source: "THERMOSTAT",
    value: 70.1,
    dateTime: 1559715522813
  },
  {
    source: "LIVING",
    value: 73.2,
    dateTime: 1559715522813
  }
];

export const resolvers = {
  Query: {
    temperatures: (parent, { source }) => temperatures.filter(x => x.source === source),
  }
};