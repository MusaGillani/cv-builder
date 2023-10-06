import Card from "./Card";
import { Input } from "./Input";
function Experiences() {
  return (
    <Card title="Experience">
      <div className="flex flex-col gap-1 p-3">
        <Input type="text" placeholder="workplace" />
        <div className="flex gap-1">
          <Input type="text" placeholder="Designation" />
          <Input type="text" placeholder="Aug 2022 - Sep 2022" />
        </div>
        <Input type="text" placeholder="bullet point" />
      </div>
      <div className="flex justify-end w-full my-1">
        <button className="p-1 px-4 text-xl rounded-full bg-[#EFEFEF]">
          +
        </button>
      </div>
    </Card>
  );
}

export default Experiences;
