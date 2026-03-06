const marks = [78, 92, 35, 88, 40, 67];

  // 1. filter() marks ≥ 40 (pass marks)
  let passed = marks.filter((mark) => mark >= 40)
  console.log(passed)

  // 2. map() to add 5 grace marks to each student
  let gracedMarks = marks.map((mark) => mark + 5)
  console.log(gracedMarks)

  // 3. reduce() to find highest mark
  let highest = marks.reduce((acc, mark) => {
    if (mark > acc) {
      return mark;
    }
    return acc;
  })
  console.log(highest)

  // 4. find() first mark below 40
  let belowPass = marks.find((mark) => mark < 40)
  console.log(belowPass)

  // 5. findIndex() of mark 92
  let foundIndex = marks.findIndex((mark) => mark === 92)
  console.log(foundIndex)