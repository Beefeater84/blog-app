// Function to get the shortened description of the product
// If deccrition length is bigger then 140 characters, it will be shortened
// from 140 characters look for first space after 140 characters and cut the string
// from that point on. If the description is shorter than 140 characters, it will be shortened
// from the beginning to 140 characters. If the description is longer than 140 characters,
// it will be shortened from the beginning to 140 characters and add "..." at the end
export default function getShortDescription(description: string): string {
  if (description.length > 140) {
    const firstSpaceAfter140Characters = description.indexOf(" ", 140);
    if (firstSpaceAfter140Characters !== -1) {
      return `${description.slice(0, firstSpaceAfter140Characters)}...`;
    }
    return `${description.slice(0, 140)}...`;
  }
  return description;
}

