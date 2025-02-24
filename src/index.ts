import { configDotenv } from "dotenv"
configDotenv()

class App {

    public static async init() {
        console.log('Hello world')
    }

}

App.init()