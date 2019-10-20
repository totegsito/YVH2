import Scanner from "../../src/models/scanner";
import * as fs from 'fs';

const testsCases: string = fs.readFileSync('test_cases.txt', 'utf8');
const cases: string[] = testsCases.split('\n').filter(el => el.length > 0);


describe('Scanner suite', () => {
  for(let i = 0; i < cases.length; i += 1) {
    const [inputAsString, outputAsString] = cases[i].split('|');
    const input = JSON.parse(inputAsString);
    const output = JSON.parse(outputAsString);
    it(`Case ${i} should returns expected output: ${outputAsString}`, (done) => {
      const scanner = new Scanner(input.protocols, input.scan);
      const givenOutput = scanner.calculateNextTarget();
      expect(givenOutput.x).toBe(output.x);
      expect(givenOutput.y).toBe(output.y);
      done();
    });
  }
});
