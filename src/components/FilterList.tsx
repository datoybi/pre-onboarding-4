import { styled } from 'styled-components';
import { IChart } from '../types';
import { getFilterList } from '../utils';

interface Props {
  data: IChart[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterList = ({ data, setSelected }: Props) => {
  const filterList = getFilterList(data);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const filterId = (event.target as HTMLLIElement).textContent;
    if (typeof filterId !== 'string') return;
    if (filterId === '전체 헤제') {
      setSelected(() => []);
    } else {
      setSelected(prevFilterId =>
        Array.from(new Set([...prevFilterId, filterId]))
      );
    }
  };

  return (
    <List>
      <li key="cancel">
        <button onClick={handleOnClick}>전체 헤제</button>
      </li>

      {filterList.map(item => (
        <li key={item}>
          <button onClick={handleOnClick}>{item}</button>
        </li>
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
