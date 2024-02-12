export default function convert(phone) {
  const regex =
    /(\d{1}|\d{2})?\s*[\(\-\s*]?(\d{3})[\)-]*\s*(\d{3})[\s-]*(\d{2})[\s-]*(\d{2})/g;

  let res = "";

  let m;

  m = regex.exec(phone);

  if (m !== null) {
    m.forEach((match, groupIndex) => {
      if (groupIndex == 0) {
      } else if (groupIndex == 1) {
        if (match.length == 1) {
          res += "+7";
        } else {
          res += `+${match}`;
        }
      } else {
        res += match;
      }
    });
  }

  return res;
}
