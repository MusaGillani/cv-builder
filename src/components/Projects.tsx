import Card from "./Card";
import { Input } from "./Input";
function Projects() {
  return (
    <Card title="Projects">
      <div className="flex flex-col gap-1 p-3">
        <div className="flex gap-1">
          <Input type="text" placeholder="Project name" />
          <Input type="text" placeholder="Project type" />
        </div>
        <div className="flex items-center gap-1">
          <p>Skills: </p>
          <Input type="text" placeholder="React, Next" />
        </div>
        <div className="flex items-center gap-1">
          <p>github: </p>
          <Input type="url" placeholder="github.com/your-name/repo-name" />
        </div>
      </div>
      <div className="flex justify-end w-full my-1">
        <button className="p-1 px-4 text-xl rounded-full bg-[#EFEFEF]">
          +
        </button>
      </div>
    </Card>
  );
}

export default Projects;
