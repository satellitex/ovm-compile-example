import parser from "@cryptoeconomicslab/ovm-parser";
import transpiler from "@cryptoeconomicslab/ovm-transpiler";
import fs from "fs";
import Coder from "@cryptoeconomicslab/coder";
import context from "@cryptoeconomicslab/context";
context.setupContext({ coder: Coder.default });

const ownership = fs.readFileSync("./ownership.ovm").toString();

const parsers = new parser.Parser();
const parsedAST = parsers.parse(ownership);
const compiledPredicates = transpiler.transpile(parsedAST);
console.log("Parsed AST");
console.log(parsedAST);
console.log("Compiled");
console.log(compiledPredicates);
