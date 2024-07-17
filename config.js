//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Ben-toxic/Topu-ai";
global.gurl = process.env.GURL || "https://wa.me/254719485000";
global.website = process.env.GURL || "https://wa.me/254719485000";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c0dd51c05d02eb80021e6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "254719485000";
global.owner = process.env.OWNER_NUMBER || "263782863950";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktXeGpaNTVveHQ4eGdWUUJoSy96Rk96ZDQrSWs0dkdwK1IvenpXaWduQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmNLK2xVZFNWU21tMjBLSkwxOGp3NkN6dmliZFBoM0trbDBrT0ppMGZsVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRWREWmlENzlBcUhKVEM0UHlGMFNta0huRExaVlU2RVNYdGpxVTRyZ0hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRHQvWU9kY1A3MExJNmQ1SXF6Y0JQRit3YVFHcldqWGhFYTJTNVFXOFdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGVkNnREdXREtkVlFUb3NkdEVOYUQ3NDBoK1AxMHFLaXVIUWc0TzB3VkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNBSXp6RUlwYXR1QTIvZ1NMOHpSbVNLY2N2MFVWREJrM1ExNnVjQjFHbUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFrYlJ0alk3TWIwNzJreERGR3hGK05QL3JSTTlmYW1ZZk9QdnU3MmhVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3FNSG1xaWxrUjdTV1ZtZWFGVytjSHhMams5Z0dpeGYvb1F2eFd5Z0YxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBDTzBQdkdHS3k5RmdGMlEyT2pBTzlWRHN6emJqWks4UGszNUFnQlBkVWlVc05aYWFvSHQrVER2bWEzRWQ5MzJnRlVGU2MvcGhpd0tQM0prM0ZpVEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJQZXcwOE43d25EWWR1SWZvQnZZMWFWVXJUYWp4NkZidGVKNW5VQzdHNlo0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4SnlkV01wbFJOeXpPdmpFbWtqWmhnIiwicGhvbmVJZCI6ImIxMTZkNzVmLWUzZmYtNGQ0MS1hYmM3LTg2NzQ2YzgxNzFjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxenQ1cnl4a3MrRGNTWGE4MmpPY0RNUWR0YW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjdTY1I3eWtIdHFRY2Z4QUNrd3pibE13S1R3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE2NzZLTkNHIiwibWUiOnsiaWQiOiIyNjM3ODI4NjM5NTA6MjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05ENjdmWUhFUDdZNExRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjIreXlLWk1sSVh3YUlWbmFVZVZsV2F5a2NnT0VzdlJyQTVIUWp4ajNaaEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNmOEU0eURKZElpcXZ4aGxjazdjNG9paGVXVklmNTA3aXFWNHdBck1XSldsNEhaUzJzS3d4SFEzRDQvNmh5akJoMzc4L2NEN3QvdDBaWXk2NnBCckF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzSUJLcUpYYWRJSEhUSUtVMUJ1VGFkTU42M3NqSnIzaHhFRlRHU1pNTFB4VFFoVmMrdmszTyt0bGRQcE9HeldmTGpTc1h5V3A0dUYycEdNL3BpTUZEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4Mjg2Mzk1MDoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdnNzaW1USlNGOEdpRloybEhsWlZtc3BISURoTEwwYXdPUjBJOFk5MllTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjQ4OTA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlXUyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "Etoo",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-HnBUwdh1O7G56Hw4S2ziT3BlbkFJvFV1GevD7UiwKENf4Az4",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "sk_1b84a657e49509b0826d6ebbb39165663860d4b606c4bf15",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "DR BEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
