import Mock from "mockjs";

Mock.mock(
  "/web/year",
  Mock.mock({
    "data|10": [
      {
        id: "@uuid",
        name: "@integer(1990, 2020)"
      }
    ]
  }).data
);

Mock.mock(
  "/web/trainingType",
  Mock.mock({
    "data|10": [
      {
        id: "@uuid",
        name: "@csentence(5)"
      }
    ]
  }).data
);

Mock.mock(
  "/web/trainees",
  Mock.mock({
    "data|10": [
      {
        id: "@uuid",
        name: "@csentence(5)"
      }
    ]
  }).data
);

Mock.mock(
  "/web/job-type",
  Mock.mock({
    "data|10": [
      {
        id: "@uuid",
        name: "@csentence(5)"
      }
    ]
  }).data
);

Mock.mock(
  "/web/unit-type",
  Mock.mock({
    "data|10": [
      {
        id: "@uuid",
        name: "@csentence(5)"
      }
    ]
  }).data
);
