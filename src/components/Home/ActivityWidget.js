import styled from 'styled-components';

const LayoutActivityWidget = styled.div`
padding: 0.5rem;
max-height: 140px;
border: solid 1px;
display: flex;
`;

const ActivityDayBox = styled.div`
background: ${(props) => props.theme.background_dark};
width: 1rem;
height: 1rem;

&:hover {
background: ${(props) => props.theme.highlight};
}
`;

const LayoutWeekDayBar = styled.div`
display: grid;

grid-template-rows: repeat(7, 1fr);
grid-gap: 1px;
margin-right: 1px;
`;

function WeekDayBar({theme}) {
  const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  return (
    <LayoutWeekDayBar>
      {week.map((d) => <div>{d}</div>)}
    </LayoutWeekDayBar>
  );
};

function WeeklyActivityBar({theme}) {
  const days = [...Array(7).keys()];
  return (
    <LayoutWeekDayBar>
      {days.map((d) => <ActivityDayBox theme={theme} />)}
    </LayoutWeekDayBar>
  );
};

const LayoutMonthlyBar = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 1px;
margin-right: 1px;
`;

function MonthActivityBar({theme}) {
  return (
    <LayoutMonthlyBar>
      <WeeklyActivityBar theme={theme} />
      <WeeklyActivityBar theme={theme} />
      <WeeklyActivityBar theme={theme} />
      <WeeklyActivityBar theme={theme} />
    </LayoutMonthlyBar>
  );
}

function ActivityWidget({theme}) {
  return (
    <LayoutActivityWidget>
      <WeekDayBar />
		  <MonthActivityBar key="firstMonth" theme={theme} />
      <MonthActivityBar key="secondMonth" theme={theme} />
      <MonthActivityBar key="thirdMonth" theme={theme} />
      <MonthActivityBar key="fourthMonth" theme={theme} />
      <MonthActivityBar key="fifthMonth" theme={theme} />
      <MonthActivityBar key="sixthMonth" theme={theme} />
    </LayoutActivityWidget>
  );
}

export default ActivityWidget;
