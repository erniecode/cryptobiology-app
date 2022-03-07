import "./Timeline.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let completeStyles = { background: "#06D6A0" };
  let uncompleteStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title">ROADMAP</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isCompleteIcon = element.icon === "complete";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isCompleteIcon ? completeStyles : uncompleteStyles}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.37)",
                color: "#fff",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
