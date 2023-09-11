export interface Chart {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface RowChart {
  0: { [key: string]: Chart };
}
export interface IChart extends Chart {
  date: string;
}
