const Feedback = ({ handleFunc }) => {
  return (
    <>
      <h2>Please leave a feedback</h2>
      <ul>
        <li>
          <button type="button" id="good" onClick={handleFunc}>
            Good
          </button>
        </li>
        <li>
          <button type="button" id="neutral" onClick={handleFunc}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" id="bad" onClick={handleFunc}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
