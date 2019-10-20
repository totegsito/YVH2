import axios from 'axios';
import * as fs from 'fs';

const testsCases: string = fs.readFileSync('test_cases.txt', 'utf8');
const cases: string[] = testsCases.split('\n').filter(el => el.length > 0);


import config from '../src/config';

const { host, port } = config;

describe('YVH integration tests', () => {
  for(let i = 0; i < cases.length; i += 1) {
    const [inputAsString, outputAsString] = cases[i].split('|');
    const input = JSON.parse(inputAsString);
    const output = JSON.parse(outputAsString);
    it(`Case ${i} should returns expected output: ${outputAsString}`, (done) => {
      axios.post(`http://${host}:${port}/radar`, input)
        .then(res => {
          const { data } = res;
          expect(data.x).toBe(output.x);
          expect(data.y).toBe(output.y);
          done();
        })
        .catch(ex => {
          done(ex);
        });
    });
  }
});
