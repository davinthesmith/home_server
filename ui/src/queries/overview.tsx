import { gql } from "apollo-boost";

export const HVAC_VALUES = gql`
  query overview($orderBy: [HvacValueColumns!]) {
    hvacValues(orderBy: $orderBy) {
      _id
      source
      temperatureValue
      humidityValue
      dateTime
    }
  }
`;
