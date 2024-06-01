import { generatorComponent } from "./generator";

export default generatorComponent(async function* () {
  yield <div> Fetching tweets ...</div>
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Hello</div>
});

