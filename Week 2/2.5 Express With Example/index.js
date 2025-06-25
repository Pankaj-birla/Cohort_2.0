const express = require("express");
const app = express();

app.use(express.json());
var users = [
  {
    name: "Pankaj",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const name = users[0]["name"];
  const usersKidneys = users[0]["kidneys"];
  const totalKidneys = usersKidneys.length;
  let healthyKidneys = 0;

  for (let i = 0; i < totalKidneys; i++) {
    if (usersKidneys[i].healthy == true) {
      healthyKidneys++;
    }
  }

  const unhealthyKidneys = totalKidneys - healthyKidneys;
  // res.send(`${name} have ${no_kidneys} kidneys. ${no_healthy_kidney}  healthy kidneys & have ${unhealthyKidneys} unhealthy kidneys` )
  res.json({
    name,
    totalKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  if (isAnyUnhealtyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({});
  }else{
    res.status(411).json({ msg: "All Kidneys are healthy!"});
  }
});

app.delete("/", function (req, res) { 
  if (isAnyUnhealtyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;

    res.json({ msg: "Done!"});
  }else{
    res.status(411).json({ msg: "No UnHealthy Kidney Found!"});
  }
});

app.listen(3000);

function isAnyUnhealtyKidney() {
  let unHealthyKidneyFound = false;
  for (let i = 0; i <  users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      unHealthyKidneyFound = true;
    }
  }
  return unHealthyKidneyFound;
}
