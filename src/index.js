#!/usr/bin/env node
import readLineSync from 'readline-sync';

export const welcome = () => {
    console.log('\nWelcome to the Brain Games! \n');
    const username = readLineSync.question('May I have your name? ');
    console.log('Hello, ' + username + '!');
};
