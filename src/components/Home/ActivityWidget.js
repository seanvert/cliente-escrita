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

function WeekDayBar(props) {
  const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  return (
    <LayoutWeekDayBar>
      {week.map((d) => <div>{d}</div>)}
    </LayoutWeekDayBar>
  );
}

function WeeklyActivityBar(props) {
  const days = [...Array(7).keys()];
  return (
    <LayoutWeekDayBar>
      {days.map((d) => <ActivityDayBox theme={props.theme} />)}
    </LayoutWeekDayBar>
  );
}

const LayoutMonthlyBar = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 1px;
margin-right: 1px;
`;

function MonthActivityBar(props) {
  return (
    <LayoutMonthlyBar>
      <WeeklyActivityBar theme={props.theme} />
      <WeeklyActivityBar theme={props.theme} />
      <WeeklyActivityBar theme={props.theme} />
      <WeeklyActivityBar theme={props.theme} />
    </LayoutMonthlyBar>
  );
}

function ActivityWidget(props) {
  return (
    <LayoutActivityWidget>
      <WeekDayBar />
      <MonthActivityBar theme={props.theme} />
      <MonthActivityBar theme={props.theme} />
      <MonthActivityBar theme={props.theme} />
      <MonthActivityBar theme={props.theme} />
      <MonthActivityBar theme={props.theme} />
      <MonthActivityBar theme={props.theme} />
    </LayoutActivityWidget>
  );
}

export default ActivityWidget;
