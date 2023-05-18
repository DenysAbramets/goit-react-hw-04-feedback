import React, { Component, useState } from 'react';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + bad + neutral;
  }
  function onLeaveFeedback(event) {
    const nameButton = event.target.textContent;
    console.log(nameButton);
    // eslint-disable-next-line default-case
    switch (nameButton) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        console.log(`Sorry.`);
    }
  }

  function countPositiveFeedbackPercentage() {
    return ((good / total) * 100).toFixed(2);
  }
  const total = countTotalFeedback();
  const value = { good, neutral, bad };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(value)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
// old class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = event => {
//     const nameButton = event.target.textContent;
//     this.setState(prevState => ({
//       [nameButton]: (prevState[nameButton] += 1),
//     }));
//   };
//   countTotalFeedback(){
//     return this.state.good + this.state.neutral + this.state.bad;
//   }
//   countPositiveFeedbackPercentage(){
//     return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
