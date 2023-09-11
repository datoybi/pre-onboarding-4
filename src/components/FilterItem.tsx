import { styled } from 'styled-components';

interface Props {
  name: string;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
  selected: boolean;
}

const FilterItem = ({ name, handleOnClick, selected }: Props) => {
  return (
    <Item selected={selected}>
      <button onClick={handleOnClick}>{name}</button>
    </Item>
  );
};

export default FilterItem;

const Item = styled.li<{ selected: boolean }>`
  & > button {
    background: ${({ selected }) => (selected === true ? '#333' : '#f0f0f0')};
    color: ${({ selected }) => (selected === true ? '#f0f0f0' : '#333')};
    transition: 1ms;
  }
`;
