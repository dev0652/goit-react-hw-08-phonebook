import { styled } from 'styled-components';
import { CiCircleInfo as ReactIcon } from 'react-icons/ci';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  color: silver;

  margin-top: 20vh;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(ReactIcon)`
  --size: 5rem;
  height: var(--size);
  width: var(--size);
`;

export const Message = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;