interface HasId {
  id: string;
}

export const getFilterList = <T extends HasId>(datas: T[]): string[] => {
  return Array.from(new Set(datas.map(data => data.id)));
};
