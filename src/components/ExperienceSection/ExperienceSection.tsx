import React from "react";

import { History, skills } from "../../utils/data";

 const Experience:React.FC<{}> = () => {

  /*
skillImageContainer {
  background-color: var(--color-secondary);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
}

.skillImageContainer img {
  width: 75px;
}
  */
  return (
    <section className=" text-white mt-20 mx-3" id="experience">
      <h2 className=" flex justify-center border border-blue-100 text-textColor text-4xl font-bold font-changa uppercase tracking-wider ">Experience</h2>
      <div className=" flex flex-col items-center gap-8 justify-evenly mt-3 sm:gap-0 sm:items-baseline sm:flex-row   ">
        <div className={"w-[100%] sm:w-[50%] sm:flex-row sm:justify-center flex flex-wrap gap-9 border border-red-500"}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className="flex flex-col items-center gap-3">
                <div className="bg-secondary rounded-full flex items-center justify-center w-[120px] h-[120px] ">
                  <img className="w-[75%] " src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={"styles.history"}>
          {History.map((historyItem, id) => {
            return (
              <li key={id} className={"styles.historyItem"}>
                <img
                  src={"historyItem.imageSrc"}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={"styles.historyItemDetails"}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};


export default Experience
/*

@import "../../vars.css";

@import "../../vars.css";





.skills {
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}

.skillImageContainer {
  background-color: var(--color-secondary);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
}

.skillImageContainer img {
  width: 75px;
}

.skill p {
  font-size: 25px;
  font-family: var(--font-roboto);
  font-weight: 500;
}

.history {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.historyItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  background: #19376d;
  background: linear-gradient(90deg, #19376d 0%, rgba(25, 55, 109, 0) 100%);
  border-radius: 10px;
  padding: 24px;
}

.historyItem img {
  width: 50px;
}

.historyItemDetails {
  font-family: var(--font-roboto);
}

.historyItemDetails h3 {
  font-size: 30px;
  font-weight: 500;
}

.historyItemDetails p {
  font-size: 20px;
  font-weight: 300;
}

.historyItemDetails ul {
  margin-top: 6px;
  list-style-position: inside;
  font-size: 25px;
  list-style-type: disc;
  margin-left: 17px;
}

@media screen and (max-width: 830px) {
  

  .skills {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }

  .history {
    width: 100%;
    gap: 9px;
  }
}
}
*/