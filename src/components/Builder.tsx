import Card from "./Card";
import { Input } from "./Input";

function Builder() {
  return (
    <Card title="Personal details">
      <div className="flex flex-col h-fit gap-2 p-3">
        <div className="flex gap-2">
          <Input placeholder="Enter you name" type="text" />
          <Input placeholder="Enter you designation" type="text" />
        </div>
        <Input placeholder="enter an image url" type="url" />
        <Input placeholder="Phone number" type="tel" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Github" type="url" />
      </div>
    </Card>
  );
}

export default Builder;
