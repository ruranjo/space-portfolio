import React from "react";

import { History, skills } from "../../utils/data";

 const Experience:React.FC<{}> = () => {

  /*
 


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
  */
  return (
    <section className=" text-white mt-20 mx-3" id="experience">
      <h2 className=" flex justify-center  text-textColor text-4xl font-bold font-changa uppercase tracking-wider ">Experience</h2>
      <div className=" flex flex-col items-center gap-8 justify-evenly  sm:gap-0 sm:items-baseline sm:flex-row  mt-8  ">
        <div className={"w-[100%] sm:w-[50%] sm:flex-row sm:justify-center flex flex-wrap gap-9"}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className="flex flex-col items-center gap-3">
                <div className="bg-secondary rounded-full flex items-center justify-center w-[100px] h-[100px] ">
                  <img className="w-[60px]" src={skill.imageSrc} alt={skill.title} />
                </div>
                <p className="text-2xl font-poppins font-medium" >{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className=" w-[100] gap-2 sm:w-[40%] flex flex-col sm:gap-10 ">
          {History.map((historyItem, id) => {
            return (
              <li key={id} className="flex flex-row items-center gap-4  bg-gradient-to-r from-black via-secondary to-transparent h-32 w-full p-6 rounded-sm">
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={"font-poppins "}>
                  <h3 className=" text-textColor text-xl font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p className="text-xl font-light">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
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