#!/usr/bin/env node
import readLineSync from 'readline-sync';

export const randNum = (min, max) => {
  const num = (Math.random() * (max - min)) + min;

  return Math.floor(num);
};

const welcome = () => {
  console.log('\nWelcome to the Brain Games! \n');
  const username = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};

export default welcome;
