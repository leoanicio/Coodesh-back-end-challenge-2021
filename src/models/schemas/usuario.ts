import { Schema } from 'mongoose';

const nameSchema = new Schema({
    "title": String,
    "first": String,
    "last": String
});

const coordinatesSchema = new Schema({
    "latitude": String,
    "longitude": String
});

const timezoneSchema = new Schema({
    "offset": String,
    "description": String
});

const localtionSchema = new Schema({
    "street": String,
    "city": String,
    "state": String,
    "postcode": String,
    "coordinates": coordinatesSchema,
    "timezone": timezoneSchema
});

const loginSchema = new Schema({
    "uuid": String,
    "username": String,
    "password": String,
    "salt": String,
    "md5": String,
    "sha1": String,
    "sha256": String
})

const dobSchema = new Schema({
    "date": String,
    "age": Number
});

const registeredSchema = new Schema({
    "date": String,
    "age": Number
});

const idSchema = new Schema({
    "name": String,
    "value": String
});

const pictureSchema = new Schema({
    "large": String,
    "medium": String,
    "thumbnail": String
});


const usuarioSchema = new Schema({
    "gender": String,
    "name": nameSchema,
    "location": localtionSchema,
    "email": String,
    "login": loginSchema,
    "dob": dobSchema,
    "registered": registeredSchema,
    "phone": String,
    "cell": String,
    "id": idSchema,
    "picture": pictureSchema,
    "nat": String,
    "imported_t": Date,
    "status": {
        type: String,
        enum: ['trash', 'published']
    },
}, {
    collection: 'usuarios'
});

export default usuarioSchema;