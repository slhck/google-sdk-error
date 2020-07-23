import stackdriver from "pino-stackdriver";

stackdriver.createWriteStream({
  projectId: "foo",
});

console.log("Hello");
