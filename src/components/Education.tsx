import Card from "./Card";
import { Input } from "./Input";
function Education() {
  return (
    <Card title="Education">
      <div className="flex flex-col gap-1 p-3">
        <div className="flex gap-1">
          <Input type="text" placeholder="Institute" />
          <Input type="text" placeholder="Aug 2022 - Sep 2022" />
        </div>
        <Input type="text" placeholder="degree program" />
      </div>
      <div className="flex justify-end w-full my-1">
        <button className="p-1 px-4 text-xl rounded-full bg-[#EFEFEF]">
          +
        </button>
      </div>
    </Card>
  );
}

export default Education;
