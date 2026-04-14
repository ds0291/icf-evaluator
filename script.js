const competencies = [
  {
    title: "1. Ethical Practice",
    questions: [
      "Maintains confidentiality",
      "Distinguishes coaching vs advice",
      "Uses respectful language"
    ]
  },
  {
    title: "2. Coaching Mindset",
    questions: [
      "Maintains curiosity",
      "Avoids judgment",
      "Allows client autonomy"
    ]
  },
  {
    title: "3. Agreements",
    questions: [
      "Client sets session goal",
      "Defines success measure",
      "Maintains focus"
    ]
  },
  {
    title: "4. Trust & Safety",
    questions: [
      "Creates safe space",
      "Shows empathy",
      "Respects client context"
    ]
  },
  {
    title: "5. Presence",
    questions: [
      "Stays present",
      "Uses silence",
      "Comfortable with not knowing"
    ]
  },
  {
    title: "6. Listening",
    questions: [
      "Reflects accurately",
      "Identifies patterns",
      "Explores deeper meaning"
    ]
  },
  {
    title: "7. Awareness",
    questions: [
      "Challenges thinking",
      "Expands perspective",
      "Encourages insights"
    ]
  },
  {
    title: "8. Growth",
    questions: [
      "Client defines actions",
      "Explores barriers",
      "Closes effectively"
    ]
  }
];

const container = document.getElementById("form-container");

function createForm() {
  competencies.forEach((comp, i) => {
    const section = document.createElement("div");
    section.className = "section";

    const title = document.createElement("h3");
    title.innerText = comp.title;
    section.appendChild(title);

    comp.questions.forEach((q, j) => {
      const div = document.createElement("div");
      div.className = "question";

      const label = document.createElement("label");
      label.innerText = q;

      const select = document.createElement("select");
      select.id = `q-${i}-${j}`;

      for (let k = 1; k <= 5; k++) {
        const option = document.createElement("option");
        option.value = k;
        option.innerText = k;
        select.appendChild(option);
      }

      div.appendChild(label);
      div.appendChild(select);
      section.appendChild(div);
    });

    container.appendChild(section);
  });
}

function submitForm() {
  let total = 0;
  let count = 0;

  competencies.forEach((comp, i) => {
    comp.questions.forEach((q, j) => {
      const val = parseInt(document.getElementById(`q-${i}-${j}`).value);
      total += val;
      count++;
    });
  });

  const avg = (total / count).toFixed(2);

  let verdict = "";
  if (avg >= 3) verdict = "PASS (ACC Ready)";
  else if (avg >= 2.5) verdict = "Borderline";
  else verdict = "Not Ready";

  document.getElementById("result").innerText =
    `Average Score: ${avg} → ${verdict}`;
}

createForm();
