import { styled } from 'styled-components';
import { IChart } from '../types';
import { getFilterList } from '../utils';
import FilterItem from './FilterItem';

interface Props {
  data: IChart[];
  selectedList: string[];
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterList = ({ data, selectedList, setSelectedList }: Props) => {
  const filterList = getFilterList(data);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 이렇게 추출하는 것 보다는 id나 name이나 dataset이나 다른 방법으로 받아올 생각하기
    const filterId = (event.target as HTMLLIElement).textContent;
    if (typeof filterId !== 'string') return;
    if (filterId === '전체 헤제') {
      setSelectedList(() => []);
      return;
    }

    const hasId = selectedList.includes(filterId);
    if (hasId) {
      const nextFilterList = selectedList.filter(item => item !== filterId);
      setSelectedList(nextFilterList);
    }
    if (!hasId) {
      setSelectedList(prevFilterId => [...prevFilterId, filterId]);
    }
  };

  return (
    <List>
      <li key="cancel">
        <button onClick={handleOnClick}>전체 헤제</button>
      </li>

      {filterList.map(item => (
        <FilterItem
          key={item}
          name={item}
          handleOnClick={handleOnClick}
          selected={selectedList.includes(item)}
        />
      ))}
    </List>
  );
};

export default FilterList;

const List = styled.ul`
  margin: 30px 0 50px 0;
  display: flex;
  justify-content: space-around;
  width: 90%;
  max-width: 700px;

  & > li > button {
    padding: 10px;
    cursor: pointer;
    border-radius: 14px;
  }

  & > li > button:hover {
    transform: scale(1.1);
    transition: 0.1s ease-in-out 0s;
  }

  & > li > button:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
    position: relative;
    top: 2px;
  }
`;
