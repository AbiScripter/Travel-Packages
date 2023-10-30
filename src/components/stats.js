// import React from "react";

function Stats({ items }) {
  // console.log(items);
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <p>
        {percentPacked == 100
          ? `All set you Are Ready to go `
          : `You have ${numItems} in you list, and you already packed ${numPacked}(${
              percentPacked !== NaN ? 0 : percentPacked
            }%) items`}
      </p>
    </footer>
  );
}

export default Stats;
