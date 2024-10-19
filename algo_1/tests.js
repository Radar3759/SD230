function runTests() {
  let problems = [
    testProblemOne(),
    testProblemTwo(),
    testProblemThree(),
    testProblemFour(),
  ];

  addProblemsToHTML(problems, problems.length, Math.ceil(problems.length / 2));
}

function testProblemOne() {
  let description = `Create a function that counts how many r's are in a string. This function must count both cases of the letter r.`;

  let example = `problemOne("Hello World") should return 1`;

  let tests = [
    { input: "", expected: 0, actual: problemOne("") },
    { input: "Hello All", expected: 0, actual: problemOne("Hello All") },
    { input: "Sister", expected: 1, actual: problemOne("Sister") },
    { input: "Roger Rabbit", expected: 3, actual: problemOne("Roger Rabbit") },
  ];

  return { description, example, tests };
}
function testProblemTwo() {
  let description = `Create a function that takes a number and returns a string formatted with commas separating thousands.`;

  let example = `problemTwo(1000000) should return "1,000,000"`;

  let tests = [
    { input: 0, expected: "0", actual: problemTwo(0) },
    { input: 1, expected: "1", actual: problemTwo(1) },
    { input: 1000, expected: "1,000", actual: problemTwo(1000) },
    { input: 100000, expected: "100,000", actual: problemTwo(100000) },
    { input: 10000000, expected: "10,000,000", actual: problemTwo(10000000) },
  ];

  return { description, example, tests };
}
function testProblemThree() {
  let description = `Create a function that takes two strings as inputs and ` + 
  `returns the longest common ending. This should be case insensitive.`;

  let example = `problemThree("Hello World", "Goodbye World") should return " World"`;

  let tests = [
    {
      input: `"Hello World", "Goodbye World"`,
      expected: " World",
      actual: problemThree("Hello World", "Goodbye World"),
    },
    {
      input: `"Hello World", "Hello World"`,
      expected: "Hello World",
      actual: problemThree("Hello World", "Hello World"),
    },
    {
      input: `"basketball", "football"`,
      expected: "tball",
      actual: problemThree("basketball", "football"),
    },
    {
      input: `"basketball", ""`,
      expected: "",
      actual: problemThree("basketball", ""),
    },
    {
      input: `"Hello World", "Something Else"`,
      expected: "",
      actual: problemThree("Hello World", "Something Else"),
    },
  ];

  return { description, example, tests };
}

function testProblemFour() {
  let description = `You are at the given coordinate of a grid. Given your coordinates` + 
  ` and a cartesian coordinate of your destination, return how many moves it will take to arrive,`+
    `if you can only move 1 integer in any direction at a time. All coordinates will be integers`;

  let example = `problemFour([0,0], [1,1]) should return 2`;

  let tests = [
    {
      input: `[0,0], [12,2]`,
      expected: 14,
      actual: problemFour([0, 0], [12, 2]),
    },
    {
      input: `[0,0], [-1,-1]`,
      expected: 2,
      actual: problemFour([0, 0], [-1, -1]),
    },
    {
      input: `[0,0], [-6,0]`,
      expected: 6,
      actual: problemFour([0, 0], [-6, 0]),
    },
    {
      input: `[0,0], [0,-1]`,
      expected: 1,
      actual: problemFour([0, 0], [0, -1]),
    },
    { input: `[0,0], [0,0]`, expected: 0, actual: problemFour([0, 0], [0, 0]) },
  ];

  return { description, example, tests };
}

function addProblemsToHTML(problems, numberOfProblems, numberOfRows) {
  let container = document.getElementById("problems");

  for (let i = 0; i < numberOfRows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for (let j = 0; j < 2; j++) {
      let problemNumber = i * 2 + j + 1;
      if (problemNumber <= numberOfProblems) {
        let card = document.createElement("div");
        card.className = "card";
        row.appendChild(card);

        let cardHeading = document.createElement("h2");
        cardHeading.className = "card-heading";
        cardHeading.innerText = "Problem " + problemNumber;
        card.appendChild(cardHeading);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        let problemDescription = document.createElement("p");
        problemDescription.className = "problem-description";
        problemDescription.innerText = problems[problemNumber - 1].description;
        cardBody.appendChild(problemDescription);

        let problemExample = document.createElement("p");
        problemExample.className = "problem-example";
        problemExample.innerHTML = `<span class='example'>Example: </span>${
          problems[problemNumber - 1].example
        }`;
        cardBody.appendChild(problemExample);

        let problemTests = document.createElement("div");
        problemTests.className = "problem-tests";
        cardBody.appendChild(problemTests);

        for (let k = 0; k < problems[problemNumber - 1].tests.length; k++) {
          let test = document.createElement("li");
          test.className = "problem-test";
          let parameters = document.createElement("p");
          parameters.className = "test-parameters";
          parameters.innerHTML = `<span class='parameter'>Test Parameter: </span>${
            problems[problemNumber - 1].tests[k].input
          }`;
          test.appendChild(parameters);

          let results = document.createElement("p");
          results.className = "test-results";
          results.innerHTML = `<span class='expected'>Expected: </span>${
            problems[problemNumber - 1].tests[k].expected
          } &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class='actual'>Actual: </span>${
                      problems[problemNumber - 1].tests[k].actual
                    }`;
          test.appendChild(results);
          problemTests.appendChild(test);

          if (
            problems[problemNumber - 1].tests[k].expected ===
            problems[problemNumber - 1].tests[k].actual
          ) {
            test.className += " test-pass";
          }
        }
      }
    }
  }
}
