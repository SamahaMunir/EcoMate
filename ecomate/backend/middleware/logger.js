import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Equivalent to __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logEvents = async(message,logFileName)=>{
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

      try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err) {
        console.log(err)
        console.log("Writing error to log...");

    }
}

const logger = (req,res,next)=>{
     logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
     // it will get full very fast i can specify the our URL from where it is coming from i can add conditions specific request methods
    console.log(`${req.method} ${req.path}`)
    next()

}

export { logEvents, logger }
