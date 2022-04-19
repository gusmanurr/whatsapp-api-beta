<h1 align="center"> whatsapp-api-nodejs Multi Device</h1>
</p>
<p align="center">
<a href="#"><img title="skynet" src="https://img.shields.io/badge/whatsapp api nodejs Multi Device-black?style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/salman0ansari"><img title="Author" src="https://img.shields.io/badge/Author-Mohd Salman Ansari-black.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/salman0ansari/whatsapp-api-nodejs"><img title="Followers" src="https://img.shields.io/github/followers/salman0ansari?color=black&style=flat-square"></a>
<a href="https://github.com/salman0ansari/whatsapp-api-nodejs"><img title="Stars" src="https://img.shields.io/github/stars/salman0ansari/whatsapp-api-nodejs?color=black&style=flat-square"></a>
<a href="https://github.com/salman0ansari/whatsapp-api-nodejs/network/members"><img title="Forks" src="https://img.shields.io/github/forks/salman0ansari/whatsapp-api-nodejs?color=black&style=flat-square"></a>

---

An implementation of [Baileys](https://github.com/adiwajshing/Baileys/) as a simple RESTful API service with multi device support just `download`, `install`, and `start` using, `simple` as that.

# Libraries Used

-   [Baileys](https://github.com/adiwajshing/Baileys/)
-   [Express](https://github.com/expressjs/express)

# Installation

1. Download or clone this repo.
2. Enter to the project directory.
3. Execute `yarn install` or `npm install` to install the dependencies.
3. Copy `.env.example` to `.env` for set environment variables.

# Configuration

Edit environment variables on `.env`

```env
# ==================================
# APPLICATION CONFIGURATION
# ==================================
PORT=3000

# ==================================
# DATABASE CONFIGURATION
# ==================================
MONGODB_ENABLED=false
MONGODB_URL=mongodb://127.0.0.1:27017/whatsapp_api

# ==================================
# WEBHOOK CONFIGURATION
# ==================================
WEBHOOK_ENABLED=false
WEBHOOK_URL=https://webhook.site/d0122a66-18a3-432d-b63f-4772b190dd72
WEBHOOK_BASE64=false
```

# Usage

1. `DEVELOPMENT:` Execute `npm run dev` or `yarn dev`
2. `PRODUCTION:` Execute `npm run start` or `yarn start`

## Generate basic instance using random key

To generate an Instance Key  
Using the route:

```bash
curl --location --request GET 'localhost:3333/instance/init' \
--data-raw ''
```

## Generate custom instance with custom key and custom webhook

To generate a Custom Instance  
Using the route:

```bash
curl --location --request GET 'http://localhost:3000/instance/init?key=CUSTOM_INSTANCE_KEY_HERE&webhook=true&webhookUrl=https://webhook.site/d7114704-97f6-4562-9a47-dcf66b07266d' \
--data-raw ''
```

Response:

```json
{
    "error": false,
    "message": "Initializing successfull",
    "key": "d7e2abff-3ac8-44a9-a738-1b28e0fca8a5"
}
```

# Using Key

Save the value of the `key` from response. Then use this value to call all the routes.

## Examples

```sh
#Get qrcode
# /instance/qr?key=KEY

curl --location --request GET 'localhost:3333/instance/qr?key=123'
```

```sh
#Send Message
# /message/text?key=KEY&id=ID&message=MESSAGE

curl --location --request POST 'localhost:3333/message/text?key=123' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id=919999999999' \
--data-urlencode 'message=Hello World'
```

See all routes here [src/api/routes](https://github.com/salman0ansari/whatsapp-api-nodejs/tree/main/src/api/routes)

## Postman Docs

-   https://documenter.getpostman.com/view/12514774/UVsPQkBq

# Legal

-   This code is in no way affiliated, authorized, maintained, sponsored or endorsed by WA(WhatsApp) or any of its affiliates or subsidiaries.
-   The official WhatsApp website can be found at https://whatsapp.com. "WhatsApp" as well as related names, marks, emblems and images are registered trademarks of their respective owners.
-   This is an independent and unofficial software Use at your own risk.
-   Do not spam people with this.
