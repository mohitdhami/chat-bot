import './App.css';
import ChatBot from "react-simple-chatbot";
import {Segment} from 'semantic-ui-react';

function App() {
  const steps = [
    {
      id: "Welcome",
      message: "Hello, How can i help You",
      trigger: "proceed-with",
    },

    //Menu
    {
      id: "proceed-with",
      message: "Choose one of the options below",
      trigger: "issues",
    },

    // Types of Issues
    {
      id: "issues",
      options: [
        {value: "Phone Support",label: "Phone Support",trigger: "Phone-Num"},
        {value: "Email Support",label: "Email Support",trigger: "support-email"},
        {value: "Not Listed",label: "Other",trigger: "Other"},
      ],
    },

    //Solution for Phone Number Info
    {
      id: "Phone-Num",
      message:"Phone Support Number: 32387832378",
      trigger: "Confirmation"
    },

    //Solution for Support Email Info
    {
      id: "support-email",
      message:"You Can Email us at support@abc.com",
      trigger: "Confirmation"
    },


    //Confirming User if Problem is solved or not, else returning to proceed-with
    {
      id: "Confirmation",
      message:"Did we Solve your Problem",
      trigger: "confirmation-response",
    },
    {
      id: "confirmation-response",
      options:[
        {value: "Yes",label: "Yes", trigger: "support-room-end"},
        {value: "No", label: "No", trigger: "proceed-with"}
      ]
    },


    //Solution for Problem not Listed
    {
      id: "Other",
      message:"Can you tell us your problem",
      trigger: "user-problem",
    },
    // Taking User Input - Problem Statement
    {
      id: "user-problem",
      user: true,
      trigger: "user-phone",
    },

    {
      id: "user-phone",
      message:"Can you tell us your Phone Number",
      trigger: "user-phone-input",
    },

    //Taking User Phone Number
    {
      id: "user-phone-input",
      user: true,
      trigger: "user-problem-solve",
    },

    //Finishing Bot Session
    {
      id: "user-problem-solve",
      message: 'Hi, We have Recorded your Issue and Now Our Support Executive will Help to Resolve your Issue',
      trigger: "support-room-end"
    },
    {
      id: "support-room-end",
      message: 'Thanks for Reaching Us',
      end: true
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Segment floated="right">
          <ChatBot steps={steps} />
        </Segment>
      </header>
    </div>
  );
}

export default App;
