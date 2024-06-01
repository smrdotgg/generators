// CREDIT GOES TO @t3dotgg
// THIS SHOULD BE MERGED INTO REACT AND SVELTE AND VUE TOO
// WEB DEV IS UNUSABLE WITHOUT THIS
// YOU ARE WRONG IF YOU DISAGREE
import { Suspense } from "react";

export function generatorComponent<T>(
  fn: (props: T) => AsyncGenerator<JSX.Element, JSX.Element, JSX.Element>
): React.FC<T> {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    return <GeneratorComponent generator={fn(props)} />;
  };
}
const GeneratorComponent = (
  async (props: {
    generator: AsyncGenerator<JSX.Element, JSX.Element, JSX.Element>;
  }) => {
    const { generator } = props;
    let result = await generator.next();
    if (result.done) {
      return result.value;
    }

    return (
      <Suspense fallback={result.value}>
        <GeneratorComponent generator={generator} />
      </Suspense>
    );
  }
);

