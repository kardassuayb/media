import classNames from "classnames";

const Skeleton = ({ times }) => {
  //   const boxes = [];
  //   for (let i = 0; i < times; i++) {
  //     boxes.push(<div key={i} />);
  //   }
  //   return boxes;

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i} />;
    });
  return boxes;
};

export default Skeleton;
