import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
// Bu yerda MongoDBStore class'sidan  (namuna)  instance olyapmiz
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),// mongoDbga ulanish
    collection: 'sessions', // MongoDB Databasesimizda session xosil qilib beradi.
});

/** 1-ENTRANCE **/
// MiddleWare Design Patterns
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static('./uploads')); // uploads folderini ham middlware orqalik clieantga ochib berdik.
app.use(express.urlencoded({ extended: true })); // Traditional API
app.use(express.json()); // REST API
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 3, // 3h
        },
        store: store,
        resave: true, // Agar false bo'lsa  10:30 da uath => 13:30 auth tugaydi. 12:00 da saytga qayta kirsak auth yangilanmaydi.
        saveUninitialized: true,
    })
);

app.use(function(req, res, next) {
    const sessionInstanc = req.session as T;
    res.locals.member = sessionInstanc.member;
    next();
})

/** 3-VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/** 4-ROUTERS **/
app.use('/admin', routerAdmin); // SSR: EJS
app.use('/', router); //SPA: (REACT)

export default app;
