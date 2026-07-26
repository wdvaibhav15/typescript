function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai... `;
  } else {
    return `chai order : ${kind}`;
  }
}

function purchaseBooks(msg: string) {
  if (msg) {
    return `${msg} books are purchased`;
  }
  return `purchased failed`;
}

//exustive check

function getbook(kind: "math" | "science" | "history" | number) {
  if (kind === "math") {
    return "math book";
  } else if (kind === "science") {
    return "science book";
  } else if (kind === "history") {
    return "history book";
  }
  return `book order: ${kind}`;
}

type MasalaChai = { type: "masala"; spicelevel: number };
type FruitChai = { type: "fruit"; fruit: string };
type GingerChai = { type: "ginger"; gingerlevel: number };

type Chai = MasalaChai | FruitChai | GingerChai;

function OrderChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `masala chai order : ${order.spicelevel}`;
      break;

    case "fruit":
      return `fruit chai order : ${order.fruit}`;
      break;

    case "ginger":
      return `ginger chai order : ${order.gingerlevel}`;
      break;

    default:
      return `chai is not orderd`;
      break;
  }
}

// the any type is the most-capable type in typescript -- while it encompasses the the type od every possible value , it doesn't force us to do any checking before we try to call, construct or access properties an these values , it also lets us assign values of type amy to values that expext any other type.
function isStringArray(input: unknown): input is string[] {
  return (
    Array.isArray(input) && input.length > 0 && typeof input[0] === "string"
  );
}
