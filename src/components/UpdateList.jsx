import List from "./Update";

const updates = [
  { id: 1, update: "Product discovery and building what matters" },
  { id: 2, update: "Measuring to ensure updates are a success" },
  { id: 3, update: "And much more!" },
];

function UpdateList() {
  return (
    <ul className="mb-7 mt-4 space-y-2 md:mb-10 md:space-y-3">
      {updates.map((detail) => (
        <List update={detail.update} key={detail.id} />
      ))}
    </ul>
  );
}

export default UpdateList;
