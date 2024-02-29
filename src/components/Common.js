export const getInitials = (name) => {
  // Split the name into words
  const nameArray = name.split(" ");
  // Extract the first letter of the first word
  const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
  // Return the first letter of the first name
  return firstNameInitial;
};
export const renderSplitText = (text) => {
  const words = text.split(" ");
  if (words.length <= 2) {
    return <div>{words.join(" ")}</div>;
  } else {
    return (
      <div>
        {words.slice(0, 2).join(" ")}
        <br />
        {words.slice(2).join(" ")}
      </div>
    );
  }
};
export const getColorPalette = (index, parentColors, childColors) => {
  const parentColor = parentColors[index % parentColors.length];
  const childColor = childColors[index % childColors.length];
  return { parentColor, childColor };
};
export const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
