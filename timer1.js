const args = process.argv.slice(2);
const beeps = [];
// get the array of postivie numbers
for (let arg of args) {
  arg = Number(arg);
  if ((typeof arg === 'number') && (arg >= 0)) beeps.push(arg);
}
// if no numbers were passed in, return
if (beeps.length === 0) return;

// sort to allow for users who pass in decimal values (e.g. 1.0001 and 1.0002 may not execute in order if not sorted)
beeps.sort();

for (let beep of beeps) {
  beep *= 1000;
  setTimeout( () => {
    console.log("BEEP ", + beep/1000 + " seconds");
  }, beep);
}