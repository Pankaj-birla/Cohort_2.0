const express = require("express");
const z = require("zod");

const app = express();

const schema = z.array(z.number());
/* 
    const schema = z.object({
        usename : z.string(),
        password: z.string(),
        country: z.literals("IN").or(z.literals("US"))
    })

*/

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;

  // Validate the kidneys value with z
  const result = schema.safeParse(kidneys);

  res.send({
    result,
  });

  // const kidneyLength = kidneys.length;

  // res.send(`You have  ${kidneyLength} Kidneys`);
});

// //global catches or Error Handling Middlewares
// app.use((err,req,res,next) => {
//     res.status(500).json({
//         msg: "An internal error occured"
//     });
// });

app.listen(3000);
