import { Parser } from '@cryptoeconomicslab/ovm-parser';
import { transpile } from '@cryptoeconomicslab/ovm-transpiler';
import { generateEVMByteCode } from '@cryptoeconomicslab/ovm-ethereum-generator';

const parsers = new Parser();
const compiledPredicates = transpile(
  parsers.parse(
    'def ownership(owner) := with Tx(su) as tx { SignedBy(tx, owner) }' +
      'def SignedBy(message, owner) := with Bytes() as signature {IsValidSignature(message, owner, signature)}'
  )
)
const result = generateEVMByteCode(compiledPredicates)
console.log(result)
