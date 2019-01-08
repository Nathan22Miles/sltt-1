# Setup

See server/ansible/_README.md

# Environment Variables

SLTT_PROJECTS_DIR = Directory to containing PouchDB databases for projects
SLTT_VIDEOS_DIR = directory containing temporary video blobs prior to upload to S3

SLTT_USER_JWT = jwt for unittest user
SLTT_USER = email address for unittest user

SLTT_UPLOADER_ACCESS_KEY = access key for S3 bucket containing uploaded videos
SLTT_UPLOADER_SECRET_ACCESS_KEY = secret access key for S3 bucket containing uploaded videos
SLTT_BUCKET = S3 bucket name


# Debugging

Launch the 'Server' config in VSCode.

The file "${workspaceFolder}/../../sltt_environment" must contain definitions for all the variables found
in secrets.yml.

## View nginx access and error logs

    cd /var/www/sltt/log

## pm2

Pm2 is used to start the server code and restart it as necessary

    pm2 ls      - should see sltt process running
    pm2 logs
    pm2 restart sltt.json
    pm2 stop sltt
    pm2 delete sltt
    pm2 save    - cause current config to be restarted on reboot
    pm2 flush   - clear logs

## Access Fauton?

TODO Figure out if we could use this as a debugging aid

    http://127.0.0.1:5984/_utils/

    https://github.com/pouchdb/pouchdb-server

    http://localhost:5984/db


## Notes

The code that sends the HTTP messages relating to the changes function is here.
There are currently patches for this in the patches directory.

    express-pouchdb/lib/routes/changes.js

## Express Internals

    [ServerRespone](nodejs.org/api/http.html#http_class_http_serverresponse)
        * EventEmitter 
          ** close (connection terminated before .end() was called)
        * end([date],[encoding],[callback])
        * statusCode, statusMessage
        
    [ClientRequest]
        * method
        * originalUrl





