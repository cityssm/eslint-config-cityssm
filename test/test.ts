
import path from 'path'
import fs from  'fs'

export function test_fn (varName) {

  // This function is purposely formatted badly to ensure the 
  // ESLint configuration is loading correctly. 

  var VAR = /[0-9\d]/g

  return varName + ' ' + 2;

}