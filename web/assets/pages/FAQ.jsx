import React, { useState } from "react";
import CommonQuestions from "../components/CommonQuestions";
import "./style/FAQ.css";

const FAQ = () => {
  const allQuestions = [
    {
      question: "What is the purpose or objective of this college event?",
      answer:
        "The purpose or objective of this college event is to provide a platform for students to showcase their talents/celebrate a particular cultural or academic theme/promote community engagement and collaboration, etc..",
      open: false,
    },
    {
      question: "Can I bring my students or colleagues to the college event?",
      answer:
        "Yes, you are welcome to bring your students or colleagues to the college event. It can be a valuable learning experience for them and contribute to their personal and professional development.",
      open: false,
    },
    {
      question:
        "What is the schedule or agenda for the event, and are there any specific sessions or activities I should attend?",
      answer:
        "The schedule and agenda for the event can be found on the event website or provided through event materials. You may want to pay attention to sessions or activities that align with your interests or professional goals.",
      open: false,
    },
    {
      question:
        " How can I provide feedback or suggestions for future college events?",
      answer:
        "Feedback and suggestions for future college events can be shared with the event organizers or through feedback forms provided during the event. Your input is valuable in improving and shaping future events.",
      open: false,
    },
    {
      question:
        " Can I present or share my expertise at the event through a workshop or presentation?",
      answer:
        "Opportunities to present or share expertise at the event may vary. You can inquire with the event organizers about any available slots or proposals for workshops or presentations.",
      open: false,
    },
    {
      question:
        "How can I access event materials or resources after the event?",
      answer:
        "Event materials or resources may be made available through the event website, online platforms, or through communication from the event organizers. Keep an eye out for post-event emails or announcements with details on accessing resources.",
      open: false,
    },
    {
      question:
        "Are there any opportunities for recognition or awards for teachers and officials at the college event?",
      answer:
        "Some college events may have recognition or awards programs specifically for teachers and officials. You can check with the event organizers or the event website for information on any available recognition opportunities.",
      open: false,
    },
    {
      question: "Can I suggest topics or themes for future college events?",
      answer:
        " Yes, you can suggest topics or themes for future college events. Event organizers often welcome input and suggestions from teachers and officials to help create engaging and relevant event experiences.",
      open: false,
    },
    {
      question:
        "Are there any specific guidelines for interacting with students or participants during the event?",
      answer:
        "While guidelines may vary depending on the nature of the event, its generally recommended to engage in respectful and professional interactions with students or participants. Maintain appropriate boundaries and adhere to any codes of conduct provided by the event organizers.",
      open: false,
    },
    {
      question:
        "How can I contribute to the overall success and impact of the college event as a teacher or official?",
      answer:
        " You can contribute to the success and impact of the college event by actively participating, sharing your knowledge and experiences, networking with other attendees, providing feedback and suggestions, and supporting the goals and objectives of the event through your involvement.",
      open: false,
    },
  ];
  const [showQuestions, setShowQuestions] = useState(
    allQuestions.slice(0, allQuestions.length / 2)
  );
  const [showAll, setShowAll] = useState(false);

  const toggleQlist = (index) => {
    setShowQuestions(
      showQuestions.map((showQuestion, i) => {
        if (i === index) {
          showQuestion.open = !showQuestion.open;
        } else {
          showQuestion.open = false;
        }
        return showQuestion;
      })
    );
  };
  const handleReadMore = () => {
    setShowQuestions(allQuestions);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowQuestions(allQuestions.slice(0, allQuestions.length / 2));
    setShowAll(false);
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="heading">
        <h1>Frequently </h1>
        <h1>Asked Questions</h1>
      </div>
      <div className="cqs">
        {showQuestions.map((showQuestion, i) => (
          <CommonQuestions
            showQuestion={showQuestion}
            key={i}
            index={i}
            toggleQlist={toggleQlist}
          />
        ))}

        {showAll ? (
          <button className="show" onClick={handleShowLess}>
            Show less
          </button>
        ) : (
          <button className="show" onClick={handleReadMore}>
            More..
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQ;
