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

  export const getClassName = (value) => {
    switch (value) {
      case "Active":
      case "In Transit":
      case "Cleared":
      case "In Route":
      case "Open":
      case "Unlimited":
      case "Completed":
      case "Married":
      case "Verified":
      case "Strong":
      case "Executed":
      case "Letter Sent":
      case "Issued":
      case "Completed Registration":
      case "Response Received":
      case "Received Response '":
      case "Successful Removal":
      case "Successful Discharge":
        return "active-color";
      case "Inactive":
      case "Closed":
      case "Delivered":
      case "Pending Registration":
      case "High":
      case "Limited":
      case "Pending Response":
      case "Not Started":
      case "On Hold":
      case "Pending":
      case "Weak":
      case "Expired":
      case "Pending Approval":
        return "inactive-color";
      case "In Progress":
        return "progress-color";
      case "Medium":
      case "Available":
      case "Single":
      case "Pending Review":
      case "Ongoing":
      case "Moderate":
      case "Freeze":
      case "Resolved":
      case "Expedited - Issued":
      case "Bond Renewal Due":
        return "medium-color";
      case "Low":
        return "closed-color";
      default:
        return "table-data";
    }
  };
