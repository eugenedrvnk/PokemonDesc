// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const concat = (startString: string, endString: string): string => {
  return startString + endString;
};

type howIDoIt = string;

interface myHometask {
  howIDoIt: howIDoIt;
  simeArray: [string, string, number];
  withData: [{ howIDoIt: howIDoIt; simeArray: [string, number] }];
}

const myHometask: myHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyArray<T> {
	[N: number]: T;
	reduce<U>(fn: (accumulator: U, currentValue: T) => U): U
}