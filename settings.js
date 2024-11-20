/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BWQ2pRK0RWVVRlcW9ZRi9VUUYrRWcrY0V0Q1c1dHlyYXNTckdjQ3BVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNyL3dlcG1WUlpBNDNUTXBBQzBPU3d3bWpJTGo1KzI0cWdXMVBuVGxpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRCtTQ1FxdkpjZU8xUEp0WnlMN2ZFWjFhSGhkZlphenNBTUpST2RMdGw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpb1R0N2hRS0lZeHM3UE16N24yVkVwcnkvUnRxcE96MjdRM3lsL0ttQVMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEVDhNc3RkVjd6L2ljV0dkcGVRRDNITzJsbnJRZSsvQzl3Z2tSSUdWWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNyOGxaVk5LY2hJc3VuTVN1d0oxVjQrdTR0T1R2VUZLZ3B5bDc0elJwM3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFyazJuU2dIbFR5eW1BYXdoeGdpamdrVnRwRFNnQ2M2SzF3MCtnQktGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTBmNWoyOThGTVhXcFp1NS9KUjZBVE9kNEdrTlJPVmROV0IrOS83WjVIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZlYjhuYm01OUJrdW5VWkFjSTY0OEg4c1prbkRpdS9nWmpDdzlTWXg3cXBFUWdpcXExZVFYRkx0NTJRNVVJNUpvNkZrdlRkNmZZV0dCWFhiWnEyMWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6Im53RUZCWWlrRWhTeGVwc0R5bXFReGk2N0FqNWgvNXlqSDVodkFhRFVKcXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk4NTc3ODk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY4QjM4NjAxRkE5QzVGQjBFNDA0RTk2QjJEMjgzODM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzIxNDU0ODZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5ODU3Nzg5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2OEIzODYwMUZBOUM1RkIwRTQwNEU5NkIyRDI4MzgzNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMTQ1NDg2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4T0tqdmRsN1FkT2lPN3BPX2RZTnlBIiwicGhvbmVJZCI6IjJkZDJiMTY4LTZjNGItNDA1YS1hOWIwLTFmMWU1YTkyZGFhOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVVNkOC9taUpKREQydnVDUzJnT0FKMkJtUU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM01wYVBEcWtYOTRvRDNjR2g3YXhNeFNPZFRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJNTTJaSDVBIiwibWUiOnsiaWQiOiIyNTQ3OTg1Nzc4OTk6OTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSEFSUklTT04gT01BUkkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l1NS9nWVF1K0w1dVFZWU5pQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJicDR1Q1Q4RG9JOUFQeHIzNkUydVhvVU1SdnRyYU5OY1B6Q2hMQjhoZ0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ild0Y1dCUVMyZnZOOFZWWVZRMGVQRkNMYy9WWnpUdklOcHVJQjZsZGxzUGJSaHZKQ2lRZ1Bwc2lxcGtJUExyM0JscFZXazdsOThwOEpoSmJFS24raURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmd3AvZXorTFFDcTNzbnppUGdFemxLTVN4cGxEMS95cXViMGhqbFpCcGVvSVZkWUhMeWVjalR4Q0NGb0MzWlBFeUwvZGdrbFNGZ0RCTXlLV0w1NG5oQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5ODU3Nzg5OTo5MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbTZlTGdrL0E2Q1BRRDhhOStoTnJsNkZERWI3YTJqVFhEOHdvU3dmSVlCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyMTQ1NDgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtyOSJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
