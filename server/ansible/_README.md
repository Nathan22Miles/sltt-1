# Create S3 Bucket

All videos are stored in an S3 bucket. At the moment there is only one bucket allowed.
At some point I think we will want to allow organization to provide their own buckets so that they
maintain closer control of their own data.

## IAM > Users > Add User

Create a user, e.g. arn:aws:iam::600904105576:user/signlanguage-uploader

Go to Security credentials > Create Access Key. 
Record "Access Key" and "Secret Access Key"
into SLTT_UPLOADER_ACCESS_KEY and SLTT_UPLOADER_SECRET_ACCESS_KEY 
in secrets.yml and "${workspaceFolder}/../../sltt_environment".

## S3 > Create bucket

Record the name of the bucket into SLTT_BUCKET 
in secrets.yml and "${workspaceFolder}/../../sltt_environment".

Set Bucket > Permissions > Bucket Policy to the following substituting the user and
bucket ids you generated in the previous step.

    {
        "Version": "2012-10-17",
        "Id": "Policy1519837896521",
        "Statement": [
            {
                "Sid": "Stmt1519837884850",
                "Effect": "Allow",
                "Principal": {
                    "AWS": "arn:aws:iam::600904105576:user/signlanguage-uploader"    
                },
                "Action": [
                    "s3:GetObject",
                    "s3:PutObject"
                ],
                "Resource": "arn:aws:s3:::ubs-signlanguage-upload/*"
            }
        ]
    }

# Install Ansible

## Client

This assumes that 'nmiles' is your login name on the host system. Adjust to match your actual login name.

* pip install ansible
* setup ~/ssh/config to allow you to 'ssh sltt'
  * Should be setup with a public/private key pair to allow logging in without a password
  * Resulting host account must allow "sudo -i" without requring a password
    * use visudo to add following line add end of /etc/sudoers

    nmiles ALL=(ALL) NOPASSWD:ALL

* create file /etc/ansible/hosts

    [_sltt]
    sltt ansible_user=nmiles letsencrypt_email=nmiles@gmail.org domain_name=sltt.octopus.run

## Host

    apt-get install python

# 'secrets.yml' file

SLTT_ROOT_USERS: "bob@gmail.com"
SLTT_UPLOADER_ACCESS_KEY: "A...Q"
SLTT_UPLOADER_SECRET_ACCESS_KEY: "f...2"
SLTT_BUCKET: "ubs-signlanguage-upload"
SLTT_USER_JWT: "..."
SLTT_USER: "milesnlwork@gmail.com"

# Initial Install

    ansible-playbook setup.yml

# Update Server Code

    ... make changes and push git
    ansible-playbook server.yml

# Update Client Code

    ... make changes and push git
    ansible-playbook client.yml