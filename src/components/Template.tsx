import Text from "./Text";
import Card from "./Card";
import { forwardRef } from "react";

const experiences = [];
const education = [];
const skills = [];
const achievements = [];
const projects = [];

const Template = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="mx-auto h-[297mm] w-[210mm] border " ref={ref}>
      <div className="flex h-full gap-4 bg-[#EFEFEF] px-10 py-[20px] text-black">
        {/* left side */}
        <div className={"w-1/3 "}>
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-black py-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src=""
              alt="profile image"
              width={150}
              height={150}
              className={" rounded-full border-4 border-solid border-white "}
            />
            <div className="py-2" />
            <p className="text-2xl font-bold text-white">name</p>
            <p className="text-md text-white">designation</p>
          </div>
          <div className="px-2 py-4">
            <Text type={"primary"}>Contact Details</Text>
            <div className="py-0.5" />
            <Text type={"primary"}>Phone: </Text>
            <Text type={"secondary"}></Text>
            <div className="py-0.5" />
            <Text type={"primary"}>Github: </Text>
            <Text type={"secondary"}></Text>
            <div className="py-0.5" />
            <Text type={"primary"}>Email: </Text>
            <Text type={"secondary"}></Text>
          </div>
          <div className="px-2 py-4">
            <Text type={"primary"}>Achievements</Text>
            {achievements.map((a) => (
              <Text type={"secondary"} key={a}>
                &bull; {a}
              </Text>
            ))}
          </div>
          <div className="px-2 py-4">
            <Text type={"primary"}>Hobbies</Text>
            <Text type={"secondary"}>&bull; Gaming</Text>
            <Text type={"secondary"}>&bull; Music</Text>
            <Text type={"secondary"}>&bull; Horse Riding</Text>
          </div>
        </div>

        {/* right side - main section */}
        <div className={"w-2/3 "}>
          <Card title="Experience">
            {experiences.map(({ company, description, position, tenure }) => (
              <div key={company} className="my-2">
                <div className="flex items-center justify-between gap-0.5">
                  <Text type={"primary"}>{company}</Text>
                  <Text type={"ternary"}>({tenure})</Text>
                </div>
                <Text type={"primary"} size={"sm"}>
                  {position}
                </Text>
                {description.map((desc, index) => (
                  <Text type={"secondary"} size={"sm"} key={index}>
                    &bull; {desc}
                  </Text>
                ))}
              </div>
            ))}
          </Card>
          <div className="py-2" />
          <Card title="Projects">
            {projects.slice(0, 3).map(({ github, name, tech, type }) => (
              <div key={name} className="my-1.5">
                <div className="flex items-center justify-between gap-x-1">
                  <Text type="primary">{name}</Text>
                  <Text type="secondary">{type}</Text>
                </div>
                <div className="flex items-center justify-between gap-x-1">
                  <Text type="primary">Skills: </Text>
                  <Text type="secondary">{tech}</Text>
                </div>
                {github && (
                  <div className="flex justify-between">
                    <Text type="primary">Repo: </Text>
                    <Text type="secondary">{github}</Text>
                  </div>
                )}
              </div>
            ))}
          </Card>
          <div className="py-2" />
          <Card title="Education">
            {education.map(({ Degree, Institution, score, tenure }) => (
              <div key={Institution} className="my-2">
                <div className="flex items-center justify-between gap-x-1">
                  <Text type="primary">
                    {Institution} - {score}
                  </Text>
                  <Text type="secondary">({tenure})</Text>
                </div>
                <Text type="secondary">{Degree}</Text>
              </div>
            ))}
          </Card>
          <div className="py-2" />
          <Card title="Skills">
            {Object.entries(skills).map(([key, values], index) => (
              <div key={key}>
                <Text type="primary">
                  {index === 0 ? key.split("_").join("/") : key}:
                </Text>
                <Text type="secondary" size="sm">
                  {values.map(({ title }) => title).join(", ")}
                </Text>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
});

Template.displayName = "Template";

export default Template;
