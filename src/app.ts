import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import { userRoute } from "./modules/user/user.route";
import { profileRouter } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
const app: Application = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// aikhne Pool & initDb func cilo jaita DB/index.ts e dise & aikhne import kore niya asci 

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ //jodi status code hisebe pathate chy
    massage: "Express Server",
    author: "Next Level Hero",
  });
});
app.use('/api/users', userRoute)
//akhon akta user jodi ai url "/api/users" e jay tahole saita "userRoute" e jabe
// aikhen app/post cilo jaita modular conevension er jonno user/user.route.ts e niya gesi 
app.use('/api/profile', profileRouter)
app.use('/api/auth', authRoute)

// aikhne app.listen cilo jaita server.ts e disi 
export default app
