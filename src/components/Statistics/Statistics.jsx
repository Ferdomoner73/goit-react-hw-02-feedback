const Statistics = ({ stats, sum, positivePercantage }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {stats.good}</li>
        <li>Neutral: {stats.neutral}</li>
        <li>Bad: {stats.bad}</li>
        <li>Total: {sum}</li>
        <li>Positive feedback: {positivePercantage}%</li>
      </ul>
    </>
  );
};

export default Statistics;
