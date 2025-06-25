import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware( c: any, next : any ){
  if(c.req.header('Authorization')){
    //validaiton logic
    await next();
  }else{
    return c.text("You have no access!")
  }
}

app.post('/',authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

app.get('/', (c) => {
  return c.text('Hi From get method dsvkm');
})
export default app
