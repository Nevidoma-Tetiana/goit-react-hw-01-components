import styled from '@emotion/styled';

const colorPicker = ({ i }) => {
  const colors = ['#E0FFFF', '#87CEFA', '#ADD8E6', '#48D1CC', '#7FFFD4'];
  return colors[i];
};

export const StatSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const StatTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
  color: #555555;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  width: 300px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const StatItem = styled.li`
  width: 52px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555555;
  background-color: ${colorPicker};
`;
export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 8px;
`;
