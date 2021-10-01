// OS module
const os = require('os');
const SIZE = 1024;

// These Functions converts from bytes to kb, mb and gb
function kb(bytes)  { return bytes / SIZE };
function mb(bytes)  { return kb(bytes) / SIZE };
function gb(bytes)  { return mb(bytes) / SIZE };

// Displays cpu architecture
console.log(os.arch());
// Displays the OS
console.log(os.platform());
// Displays CPU cores
console.log(os.cpus().length);
// Displays constants variables
console.log(os.constants);
// Displays free memory in kb
console.log(kb(os.freemem()));
// Displays free memory in mb
console.log(mb(os.freemem()));
// Displays free memory in gb
console.log(gb(os.totalmem()));
// Displays homedir
console.log(os.homedir());
// Displays tpmdir
console.log(os.tmpdir());
// Displays hostname
console.log(os.hostname());
// Displays network interfaces
console.log(os.networkInterfaces());


